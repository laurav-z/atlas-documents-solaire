import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {filterDocuments,toCSV,safeURL,documentURL,isFrameworkDocument} from '../lib.js';
import {DOCS as originalDocuments} from '../research/original-documents.js';
const docs=JSON.parse(readFileSync(new URL('../data/documents.json',import.meta.url)));
const regions=JSON.parse(readFileSync(new URL('../data/regions.json',import.meta.url)));
const base={q:'',region:'',dept:'',topic:'',type:'',org:'',year:'',status:'',sort:'recommended',includeRegional:false,includeNational:false,saved:false};
test('Every published record has provenance, a direct URL, unique ID, and supported territory',()=>{
 assert.equal(new Set(docs.map(d=>d.id)).size,docs.length);
 for(const d of docs){for(const k of ['id','title','pdf','url','org','type','status','summary','utility'])assert.ok(typeof d[k]==='string'&&d[k].length,`${d.id} missing ${k}`);assert.match(d.id,/^[a-z0-9-]+$/);assert.ok(safeURL(d.pdf));assert.ok(Array.isArray(d.tags));assert.ok(['national','regional'].includes(d.dept)||regions[d.region]?.some(([c])=>c===d.dept),d.id);}
});
test('All fifteen departments have local references and selectable map geometry',()=>{
 const geo=JSON.parse(readFileSync(new URL('../assets/departements.geojson',import.meta.url)));
 const codes=Object.values(regions).flat().map(([c])=>c);assert.equal(codes.length,15);
 for(const code of codes){assert.ok(docs.some(d=>d.dept===code),`No document for ${code}`);assert.ok(geo.features.some(f=>f.properties.code===code));}
});
test('Department selection is local by default with independent regional and national additions',()=>{
 const local=filterDocuments(docs,{...base,dept:'52'},regions);assert.ok(local.length);assert.ok(local.every(d=>d.dept==='52'));
 const regional=filterDocuments(docs,{...base,dept:'52',includeRegional:true},regions);assert.ok(regional.length>local.length);assert.ok(regional.every(d=>d.dept==='52'||d.dept==='regional'&&d.region==='Grand Est'));
 const national=filterDocuments(docs,{...base,dept:'52',includeNational:true},regions);assert.ok(national.some(d=>d.dept==='national'));assert.ok(national.every(d=>d.dept==='52'||d.dept==='national'));
 const both=filterDocuments(docs,{...base,dept:'52',includeRegional:true,includeNational:true},regions);assert.equal(both.length,regional.length+national.length-local.length);
});
test('Region selection shows only regional publications; national sources require explicit opt-in',()=>{
 for(const region of Object.keys(regions)){const result=filterDocuments(docs,{...base,region},regions);assert.ok(result.length);assert.ok(result.every(d=>d.region===region&&d.dept==='regional'));}
 assert.ok(filterDocuments(docs,base,regions).every(d=>d.dept!=='national'));
 const national=filterDocuments(docs,{...base,region:'Grand Est',includeNational:true},regions);assert.ok(national.some(d=>d.dept==='national'));assert.ok(national.every(d=>d.dept==='national'||d.dept==='regional'&&d.region==='Grand Est'));
});
test('Accent-insensitive multi-word search and combined filters work',()=>{
 const result=filterDocuments(docs,{...base,q:'agrivoltaisme vosges',dept:'88'},regions);assert.ok(result.length);assert.ok(result.every(d=>d.dept==='88'));
 assert.equal(filterDocuments(docs,{...base,q:'zzzz-no-results'},regions).length,0);
 const first=docs[0];assert.ok(filterDocuments(docs,{...base,year:String(first.year),org:first.org,type:first.type},regions).some(d=>d.id===first.id));
});
test('Saved-only view intersects filters and does not change source array',()=>{
 const first=docs[0],before=JSON.stringify(docs);assert.deepEqual(filterDocuments(docs,{...base,saved:true},regions,new Set([first.id])),[first]);assert.equal(JSON.stringify(docs),before);
});
test('National topic covers all national documents, independently of tag wording',()=>{
 assert.deepEqual(new Set(filterDocuments(docs,{...base,topic:'Réglementation nationale',includeNational:true},regions).map(d=>d.id)),new Set(docs.filter(d=>d.dept==='national').map(d=>d.id)));
});
test('Framework search tolerates plurals, spaces and typographic hyphens',()=>{
 const ids=q=>filterDocuments(docs,{...base,q},regions).map(d=>d.id);
 assert.ok(ids('document cadre').length);
 for(const q of ['document-cadre','documents-cadres','documents cadres','document‑cadre'])assert.deepEqual(ids(q),ids('document cadre'));
 assert.ok(isFrameworkDocument({title:'Atlas des parcelles',type:'Cartographie',tags:['Documents-cadres']}));
 assert.ok(!isFrameworkDocument({title:'Guide paysager',type:'Guide',tags:['Paysage']}));
});
test('Original PDFs remain traceable even when a more authoritative URL is used',()=>{
 const canonical=url=>decodeURIComponent(url).replace('/index.php/','/');
 for(const d of originalDocuments.filter(d=>d.pdf))assert.ok(docs.some(current=>[current.pdf,...(current.previousPdfUrls||[])].some(url=>canonical(url)===canonical(d.pdf))),`Original PDF no longer traceable: ${d.id}`);
});
test('Export handles quotes, newlines and spreadsheet formula injection',()=>{
 const csv=toCSV([{title:'=HYPERLINK("bad")',region:'a\nb',dept:'02',org:'x',year:2025,type:'Guide',status:'recommandation',pdf:'https://example.org/a.pdf',url:'https://example.org'}]);assert.ok(csv.startsWith('\uFEFF'));assert.ok(csv.includes('"\'=HYPERLINK(""bad"")"'));assert.ok(csv.includes('"a\nb"'));assert.equal(safeURL('javascript:alert(1)'),'');
});
test('Known pages in collected official acts open at the requested PDF page',()=>{
 assert.equal(documentURL({pdf:'https://example.org/recueil.pdf',pdfPage:21}),'https://example.org/recueil.pdf#page=21');
 assert.equal(documentURL({pdf:'https://example.org/document.pdf'}),'https://example.org/document.pdf');
});
test('If link checks exist, all public records have a timestamped technical result',()=>{
 let report;try{report=JSON.parse(readFileSync(new URL('../data/link-checks.json',import.meta.url)));}catch{return;}
 for(const d of docs){const check=report.results.find(c=>c.id===d.id);assert.ok(check,`Missing check for ${d.id}`);assert.equal(check.url,d.pdf);assert.ok(!Number.isNaN(Date.parse(check.checkedAt)));if(check.ok)assert.equal(check.pdfSignature,true);}
});
