// One-time/intentional research import. The published catalogue remains editable independently.
import {DOCS} from '../research/original-documents.js';
import {readFile,writeFile} from 'node:fs/promises';
const entries=new Map(DOCS.filter(d=>d.pdf).map(d=>[d.id,{...d,verified:'',status:d.status==='en vigueur'?'publié — portée à vérifier':d.status,evidence:'Notice reprise du catalogue initial ; statut et contenu à confirmer chez l’éditeur.'}]));
for(const file of ['grand-est','hauts-de-france','national']){
 const researched=JSON.parse(await readFile(`research/${file}.json`,'utf8'));
 for(const d of researched){if(d.replacesId)entries.delete(d.replacesId);entries.set(d.id,d);}
}
const seen=new Map();
for(const d of entries.values()){
 if(!d.pdf)continue;
 const key=d.pdf.replace('/index.php/','/')+'|'+d.dept;
 const prior=seen.get(key);
 if(!prior||d.evidence&&!prior.verified||d.verified)seen.set(key,d);
}
const docs=[...seen.values()].sort((a,b)=>a.id.localeCompare(b.id));
await writeFile('data/documents.json',JSON.stringify(docs,null,2)+'\n');
console.log(`${docs.length} notices fusionnées. Vérifier les différences avant validation.`);
