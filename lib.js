export const normalize = value => String(value ?? '').normalize('NFD').replace(/\p{Diacritic}/gu,'').toLowerCase().replace(/\p{Pd}/gu,' ').replace(/\bdocuments?\s+cadres?\b/g,'document cadre');
export const isFrameworkDocument = d => /\bdocument cadre\b/.test(normalize([d.title,d.type,...(d.tags||[])].join(' ')));
export function filterDocuments(docs,state,regions,favorites=new Set()) {
  return docs.filter(d=>{
    if(state.saved && !favorites.has(d.id)) return false;
    const region=state.dept ? Object.keys(regions).find(r=>regions[r].some(([c])=>c===state.dept)) : state.region;
    if(d.dept==='national'){if(!state.includeNational)return false;}
    else if(state.dept){if(d.dept!==state.dept && !(state.includeRegional && d.dept==='regional' && d.region===region))return false;}
    else if(region){if(d.dept!=='regional'||d.region!==region)return false;}
    if(state.topic){const match=state.topic==='Réglementation nationale'?d.dept==='national':state.topic==='Document-cadre'?isFrameworkDocument(d):state.topic==='Environnement'?d.tags.some(t=>/environnement|biodiversité|zones humides/.test(t.toLowerCase())):state.topic==='Paysage'?d.tags.some(t=>/paysage|patrimoine|paysagère/.test(t.toLowerCase())):d.tags.includes(state.topic);if(!match)return false;}
    for(const key of ['type','org','year','status'])if(state[key] && String(d[key])!==String(state[key]))return false;
    const haystack=normalize([d.title,d.summary,d.utility,d.org,d.dept,d.region,...d.tags,regions[d.region]?.find(([c])=>c===d.dept)?.[1]].join(' '));
    return normalize(state.q).trim().split(/\s+/).every(q=>haystack.includes(q));
  }).sort((a,b)=>state.sort==='title'?a.title.localeCompare(b.title,'fr'):state.sort==='newest'?(b.year||0)-(a.year||0)||a.title.localeCompare(b.title,'fr'):Number(b.importance)-Number(a.importance)||(b.year||0)-(a.year||0)||a.title.localeCompare(b.title,'fr'));
}
export function csvCell(value){let s=String(value??'');if(/^[=+@\-\t\r]/.test(s))s="'"+s;return '"'+s.replaceAll('"','""')+'"';}
export function documentURL(d){const url=safeURL(d.pdf);return url&&Number.isInteger(d.pdfPage)&&d.pdfPage>0?url.split('#')[0]+'#page='+d.pdfPage:url;}
export function toCSV(docs){return '\uFEFF'+[['Titre','Région','Département','Organisme','Année','Type','Statut','PDF direct','Page source'],...docs.map(d=>[d.title,d.region,d.dept,d.org,d.year,d.type,d.status,documentURL(d),d.url])].map(row=>row.map(csvCell).join(';')).join('\r\n');}
export function safeURL(value){try{const url=new URL(value);return ['https:','http:'].includes(url.protocol)?url.href:'';}catch{return '';}}
