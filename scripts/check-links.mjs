import {readFile,writeFile,mkdir,mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
const exec=promisify(execFile);
const docs=JSON.parse(await readFile('data/documents.json','utf8'));
const ids=process.argv.find(a=>a.startsWith('--ids='))?.slice(6).split(',');
const selected=ids?docs.filter(d=>ids.includes(d.id)):docs;
if(ids?.some(id=>!docs.some(d=>d.id===id)))throw new Error('Identifiant inconnu dans --ids');
const checkedAt=new Date().toISOString();
const temp=await mkdtemp(join(tmpdir(),'atlas-links-'));
let results=[];
if(ids){try{const prior=JSON.parse(await readFile('data/link-checks.json','utf8'));results=prior.results.filter(r=>!ids.includes(r.id)&&docs.some(d=>d.id===r.id&&d.pdf===r.url));}catch{}}
let next=0;
async function check(d){
 const prefix=join(temp,d.id);
 let metadata='',error='';
 try{const r=await exec('curl',['--silent','--show-error','--location','--max-time','35','--connect-timeout','12','--range','0-4095','--max-filesize','40000000','--user-agent','AtlasSolaire-LinkCheck/1.0','--output',prefix,'--write-out','%{http_code}\n%{content_type}\n%{url_effective}',d.pdf],{maxBuffer:1024*1024});metadata=r.stdout;}
 catch(e){metadata=e.stdout||'';error=(e.stderr||e.message).trim().slice(0,350);}
 const [httpStatus,contentType,finalUrl]=metadata.split('\n');
 let isPDF=false;
 try{const content=await readFile(prefix);isPDF=content.subarray(0,1024).includes(Buffer.from('%PDF-'));}catch{}
 const ok=isPDF&&Number(httpStatus)>=200&&Number(httpStatus)<300;
 if(!ok&&!error)error=`HTTP ${httpStatus||'inconnu'} ; ${contentType||'type inconnu'} ; signature PDF absente`;
 const result={id:d.id,url:d.pdf,checkedAt:new Date().toISOString(),ok,httpStatus:Number(httpStatus)||null,contentType:contentType||null,finalUrl:finalUrl||null,pdfSignature:isPDF,error:ok?null:error};
 results.push(result);console.log(`${ok?'OK':'À REVOIR'} ${d.id}${ok?'':' — '+result.error}`);
}
try{await Promise.all(Array.from({length:4},async()=>{while(next<selected.length){const d=selected[next++];await check(d);}}));}
finally{await rm(temp,{recursive:true,force:true});}
results.sort((a,b)=>a.id.localeCompare(b.id));
const report={checkedAt,method:'GET curl, redirections suivies, plage 0-4095 si supportée, signature %PDF- contrôlée, TLS vérifié. Une réussite technique ne valide pas la portée juridique.',total:docs.length,passed:results.filter(r=>r.ok).length,results};
await mkdir('research/link-checks',{recursive:true});
await writeFile('data/link-checks.json',JSON.stringify(report,null,2)+'\n');
await writeFile(`research/link-checks/${checkedAt.replaceAll(':','-')}.json`,JSON.stringify(report,null,2)+'\n');
console.log(`${report.passed}/${report.total} liens PDF confirmés. Rapport daté enregistré.`);
if(report.passed!==report.total)process.exitCode=1;
