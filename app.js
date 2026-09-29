import {filterDocuments,toCSV,safeURL,documentURL} from './lib.js';
const $=s=>document.querySelector(s);
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const defaults={q:'',region:'',dept:'',topic:'',type:'',org:'',year:'',status:'',sort:'recommended',includeRegional:false,includeNational:false,saved:false};
let state={...defaults},docs=[],regions={},linkChecks={},results=[],toastTimer;
let favorites=new Set();
try{const saved=JSON.parse(localStorage.getItem('atlas-solaire-selection-v1')||'[]');if(Array.isArray(saved))favorites=new Set(saved.filter(s=>typeof s==='string'));}catch{}
function fromURL(){const p=new URLSearchParams(location.search);state={...defaults};for(const k of Object.keys(defaults)){if(p.has(k))state[k]=typeof defaults[k]==='boolean'?p.get(k)==='true':p.get(k);}if(!Object.keys(regions).includes(state.region))state.region='';if(state.dept&&!Object.values(regions).flat().some(([c])=>c===state.dept))state.dept='';if(state.dept)state.region=regionFor(state.dept);}
function syncURL(){const p=new URLSearchParams();for(const k of Object.keys(defaults))if(state[k]!==defaults[k])p.set(k,String(state[k]));history.replaceState(null,'',location.pathname+(p.size?'?'+p:'')+location.hash);}
function toast(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),3200);}
function deptName(code){return Object.values(regions).flat().find(([c])=>c===code)?.[1]||code;}
function regionFor(code){return Object.keys(regions).find(r=>regions[r].some(([c])=>c===code));}
function territory(d){return d.dept==='national'?'Référence nationale':d.dept==='regional'?d.region:`${d.dept} · ${deptName(d.dept)}`;}
function selectTerritory(region='',dept=''){state.region=region;state.dept=dept;state.includeRegional=false;state.includeNational=false;if(state.topic==='Réglementation nationale')state.topic='';render();}
function checkFor(d){return linkChecks[d.id];}
function card(d){
 const check=checkFor(d),verified=check?.ok===true, saved=favorites.has(d.id);
 const warning=/projet|ancien|incertain|vérifier|consultation|remplacé/i.test(d.status);
 const status=/version initiale/i.test(d.status)?'Version initiale':/recommandation/i.test(d.status)?'Recommandation':/publié/i.test(d.status)?'Texte publié':/instruction/i.test(d.status)?'Instruction':d.status.charAt(0).toUpperCase()+d.status.slice(1);
 const href=esc(documentURL(d)),source=esc(safeURL(d.url));
 return `<article class="document-card"><div class="card-top"><span class="doc-symbol" aria-hidden="true">▤</span><div><span class="doc-area">${esc(territory(d))}</span><span class="doc-type">${esc(d.type)}</span></div><button class="favorite" data-favorite="${esc(d.id)}" aria-pressed="${saved}" aria-label="${saved?'Retirer de':'Ajouter à'} ma sélection : ${esc(d.title)}">${saved?'★':'☆'}</button></div><h4><a href="${href}" target="_blank" rel="noopener noreferrer">${esc(d.title)}</a></h4><p class="card-meta">${esc(d.org)} <span aria-hidden="true">·</span> ${d.year||'Date non précisée'}</p><p class="card-summary">${esc(d.utility||d.summary)}</p><div class="card-tags"><span class="tag ${warning?'status-warning':''}">${esc(status)}</span>${d.tags.slice(0,2).map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div><div class="card-bottom"><a class="pdf-link" href="${href}" target="_blank" rel="noopener noreferrer">Ouvrir le PDF <span aria-hidden="true">↗</span> <b class="pdf-label">PDF</b></a><span class="check-label ${verified?'':'review'}">${verified?'✓ PDF contrôlé':'Lien à revérifier'}</span></div><details class="source-detail"><summary>Source & vérification</summary><p>${esc(d.summary)}</p><p><strong>Statut :</strong> ${esc(d.status)}. ${esc(d.evidence||'Vérifier la version applicable auprès de l’organisme éditeur.')}</p><p>${verified?'PDF reconnu lors du contrôle technique du '+new Date(check.checkedAt).toLocaleDateString('fr-FR')+'. Ce contrôle ne valide pas la portée juridique.':`Contrôle technique ${check?.checkedAt?'du '+new Date(check.checkedAt).toLocaleDateString('fr-FR')+' : ':': '}${esc(check?.error||'non confirmé pour ce lien')}. Le PDF peut rester accessible dans votre navigateur.`}</p>${(d.relatedLinks||[]).length?`<ul class="related-links">${d.relatedLinks.map(l=>`<li><a href="${esc(safeURL(l.url))}" target="_blank" rel="noopener noreferrer">${esc(l.label)} ↗</a> <span>${esc(l.kind)}</span></li>`).join('')}</ul>`:''}<p class="source-links">${source&&source!==href?`<a href="${source}" target="_blank" rel="noopener noreferrer">Page de publication ↗</a>`:''}<a href="./SOURCES.md#${esc(d.id)}" target="_blank" rel="noopener">Registre des sources ↗</a></p></details></article>`;
}
function render(){
 syncURL();results=filterDocuments(docs,state,regions,favorites);
 $('#documents').innerHTML=results.length?results.map(card).join(''):`<div class="empty-state"><span aria-hidden="true">${state.saved?'☆':'⌕'}</span><h4>${state.saved?'Aucun document enregistré dans cette vue.':'Aucun résultat dans ce catalogue.'}</h4><p>${state.saved?'Ajoutez des documents avec l’étoile de chaque fiche, ou effacez les filtres.':'Le recensement peut être incomplet : ce résultat ne signifie pas qu’un document n’existe pas. Essayez un autre mot-clé ou élargissez les filtres.'}</p><button id="empty-reset" class="primary-button">${state.saved?'Revenir à la bibliothèque':'Effacer les filtres'} ↗</button></div>`;
 $('#documents').setAttribute('aria-busy','false');
 $('#results-count').textContent=`${results.length} document${results.length===1?'':'s'}${state.saved?' dans ma sélection':''}`;
 const context=state.dept?state.dept+' · '+deptName(state.dept):state.region?'Publications régionales · '+state.region:'Documents départementaux et régionaux des deux régions';
 $('#results-context').textContent=context+(state.dept&&state.includeRegional?' · documents régionaux inclus':'')+(state.includeNational?' · documents nationaux inclus':'');
 const regional=$('#include-regional');regional.hidden=!state.dept;regional.setAttribute('aria-pressed',String(state.includeRegional));
 regional.textContent=(state.includeRegional?'✓ Documents ':'＋ Ajouter les documents ')+(state.region==='Grand Est'?'du Grand Est':'des Hauts-de-France')+(state.includeRegional?' inclus':'');
 $('#include-national').setAttribute('aria-pressed',String(state.includeNational));$('#include-national').textContent=state.includeNational?'✓ Documents nationaux inclus':'＋ Ajouter les documents nationaux';
 $('#map-results').textContent='Voir les '+results.length+' documents ↓';
 $('#result-footer-text').textContent=`${results.length} référence${results.length===1?'':'s'} · Accès direct aux documents originaux`;
 $('#saved-count').textContent=favorites.size;$('#favorites-button').setAttribute('aria-pressed',String(state.saved));
 $('#search').value=state.q;$('#sort').value=state.sort;
 for(const k of ['type','org','year','status'])$(`#${k}-filter`).value=state[k];
 document.querySelectorAll('[data-topic]').forEach(b=>{const selected=b.dataset.topic===state.topic;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',selected);});
 document.querySelectorAll('[data-region]').forEach(b=>{const selected=state.region===b.dataset.region;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',selected);});
 document.querySelectorAll('[data-territory]').forEach(b=>{const selected=b.dataset.territory===state.dept&&(!state.region||!!state.dept);b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',selected);});
 updateMap();
 const active=['q','region','dept','topic','type','org','year','status'].filter(k=>state[k]);
 $('#filter-count').textContent=['type','org','year','status'].filter(k=>state[k]).length||'';
 $('#active-filters').innerHTML=active.length?`<div class="active-chips">${active.filter(k=>k!=='region'||!state.dept).map(k=>`<button data-clear="${k}" aria-label="Retirer le filtre ${esc(state[k])}">${esc(k==='dept'?deptName(state[k]):state[k])} <span aria-hidden="true">×</span></button>`).join('')}</div>`:'';
}
function sidebar(){
 $('#department-list').innerHTML=Object.entries(regions).reverse().map(([r,depts])=>`<div class="region-group"><button class="region-heading" data-region="${esc(r)}"><i class="legend-dot ${r==='Grand Est'?'east':'north'}"></i>${r}</button>${depts.map(([c,n])=>`<button class="dept-button" data-territory="${c}"><span>${c}</span>${n}<span class="dept-count">${docs.filter(d=>d.dept===c).length}</span></button>`).join('')}</div>`).join('');
 for(const k of ['type','org','year','status']){const values=[...new Set(docs.map(d=>d[k]).filter(Boolean))].sort((a,b)=>k==='year'?b-a:String(a).localeCompare(b,'fr'));$(`#${k}-filter`).innerHTML+=values.map(v=>`<option value="${esc(v)}">${esc(v)}</option>`).join('');}
}
const rings = g => g.type==='Polygon'?g.coordinates:g.coordinates.flat();
function pathOf(g,project){return rings(g).map(r=>'M'+r.map(project).map(p=>p.map(n=>n.toFixed(2)).join(',')).join('L')+'Z').join('');}
function centroid(g,project){const r=rings(g).reduce((a,b)=>a.length>b.length?a:b);let x=0,y=0,area=0;for(let i=0;i<r.length-1;i++){const [ax,ay]=project(r[i]),[bx,by]=project(r[i+1]);const z=ax*by-bx*ay;area+=z;x+=(ax+bx)*z;y+=(ay+by)*z;}return [x/(3*area),y/(3*area)];}
let mapBounds={},mapRegion=null,mapFrame=0;
function animateMap(target){
 const svg=$('#map-stage svg');if(!svg)return;cancelAnimationFrame(mapFrame);
 const start=svg.getAttribute('viewBox').split(' ').map(Number),time=performance.now();
 if(matchMedia('(prefers-reduced-motion: reduce)').matches){svg.setAttribute('viewBox',target.join(' '));return;}
 const tick=now=>{const t=Math.min(1,(now-time)/580),ease=t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;svg.setAttribute('viewBox',target.map((n,i)=>start[i]+(n-start[i])*ease).join(' '));if(t<1)mapFrame=requestAnimationFrame(tick);};mapFrame=requestAnimationFrame(tick);
}
function updateMap(){
 $('#map-step').textContent=state.region?'2 · DÉPARTEMENT':'1 · RÉGION';
 $('#map-title').textContent=state.region?state.region+' · sélectionnez un département':'Sélectionnez votre région';
 $('#map-reset').hidden=!state.region;
 $('#map-hint').textContent=state.dept?state.dept+' · '+deptName(state.dept)+' — documents départementaux sélectionnés':state.region?'Choisissez un département ; les publications régionales sont affichées ci-dessous.':'Sélectionnez Grand Est ou Hauts-de-France pour afficher ses départements.';
 const svg=$('#map-stage svg');if(!svg)return;
 svg.setAttribute('aria-label',state.region?'Carte des départements : '+state.region:'Carte de France. Sélectionnez Grand Est ou Hauts-de-France.');
 svg.classList.toggle('zoomed',!!state.region);
 svg.querySelectorAll('[data-map-region]').forEach(g=>{const active=!state.region||g.dataset.mapRegion===state.region;g.style.display=active?'':'none';if(!state.region){g.setAttribute('role','button');g.setAttribute('tabindex','0');}else{g.removeAttribute('role');g.removeAttribute('tabindex');}});
 svg.querySelectorAll('[data-map-dept]').forEach(p=>{p.classList.toggle('selected',state.dept===p.dataset.mapDept);if(state.region&&regionFor(p.dataset.mapDept)===state.region){p.setAttribute('role','button');p.setAttribute('tabindex','0');p.setAttribute('aria-pressed',String(state.dept===p.dataset.mapDept));}else{p.removeAttribute('role');p.removeAttribute('tabindex');p.removeAttribute('aria-pressed');}});
 if(mapRegion!==state.region){mapRegion=state.region;animateMap(mapBounds[state.region]||[0,0,445,348]);}
}
function drawMap(geo){
 const project=([lon,lat])=>[(lon+5.2)*23+50,(51.4-lat)*32+8],mainland=geo.features.filter(f=>f.properties.code.length===2);
 const background=mainland.filter(f=>!regionFor(f.properties.code)).map(f=>`<path d="${pathOf(f.geometry,project)}" class="department"/>`).join('');
 const groups=Object.keys(regions).map(region=>{
  const features=mainland.filter(f=>regionFor(f.properties.code)===region),points=features.flatMap(f=>rings(f.geometry).flat().map(project));
  const xs=points.map(p=>p[0]),ys=points.map(p=>p[1]),x=Math.min(...xs),y=Math.min(...ys),w=Math.max(...xs)-x,h=Math.max(...ys)-y,pad=8;
  mapBounds[region]=[x-pad,y-pad,w+pad*2,h+pad*2];
  return `<g data-map-region="${region}" aria-label="Sélectionner ${region}">${features.map(f=>{const c=f.properties.code,[cx,cy]=centroid(f.geometry,project);return `<path d="${pathOf(f.geometry,project)}" class="department available ${region==='Grand Est'?'east':'north'}" data-map-dept="${c}" aria-label="${esc(c+' '+f.properties.nom)}"><title>${esc(c+' · '+f.properties.nom)}</title></path><text class="map-label" x="${cx}" y="${cy}">${c}</text>`;}).join('')}</g>`;
 }).join('');
 const overseas=geo.features.filter(f=>f.properties.code.length===3).map((f,i)=>{const points=rings(f.geometry).flat(),xs=points.map(p=>p[0]),ys=points.map(p=>p[1]),minX=Math.min(...xs),minY=Math.min(...ys),scale=Math.min(25/(Math.max(...xs)-minX),20/(Math.max(...ys)-minY)),ox=52+i*48;return `<path d="${pathOf(f.geometry,([x,y])=>[ox+(x-minX)*scale,324-(y-minY)*scale])}" class="department"/><text class="map-inset-label" x="${ox+12}" y="337">${f.properties.code}</text>`;}).join('');
 $('#map-stage').innerHTML=`<svg viewBox="0 0 445 348" aria-label="Carte de France"><g class="map-context">${background}${overseas}<text class="map-region-label" x="112" y="20">HAUTS-DE-FRANCE</text><path d="M217 21L242 28" stroke="#98ac87" stroke-width=".6"/><text class="map-region-label" x="332" y="139">GRAND EST</text><path d="M332 131L320 111" stroke="#98ac87" stroke-width=".6"/></g>${groups}</svg>`;
 mapRegion=null;updateMap();
}
document.addEventListener('click',e=>{
 const fav=e.target.closest('[data-favorite]');if(fav){const id=fav.dataset.favorite;favorites.has(id)?favorites.delete(id):favorites.add(id);try{localStorage.setItem('atlas-solaire-selection-v1',JSON.stringify([...favorites]));}catch{toast('Sélection conservée pour cette session uniquement.');}render();document.querySelector(`[data-favorite="${CSS.escape(id)}"]`)?.focus();return;}
 const t=e.target.closest('[data-territory]');if(t){selectTerritory(regionFor(t.dataset.territory)||'',t.dataset.territory);return;}
 const r=e.target.closest('[data-region]');if(r){selectTerritory(state.region===r.dataset.region&&!state.dept?'':r.dataset.region);return;}
 const m=e.target.closest('[data-map-dept]');if(m&&state.region){selectTerritory(state.region,m.dataset.mapDept);return;}
 const mr=e.target.closest('[data-map-region]');if(mr&&!state.region){selectTerritory(mr.dataset.mapRegion);return;}
 const topic=e.target.closest('[data-topic]');if(topic){state.topic=topic.dataset.topic;if(state.topic==='Réglementation nationale')state.includeNational=true;render();return;}
 const clear=e.target.closest('[data-clear]');if(clear){state[clear.dataset.clear]='';if(['dept','region'].includes(clear.dataset.clear)){state.includeRegional=false;state.includeNational=false;}render();return;}
 if(e.target.closest('#reset,#empty-reset')){state={...defaults};render();}
});
$('#map-stage').addEventListener('keydown',e=>{if(e.target.matches('[data-map-dept][tabindex="0"],[data-map-region][tabindex="0"]')&&['Enter',' '].includes(e.key)){e.preventDefault();e.target.dispatchEvent(new MouseEvent('click',{bubbles:true}));}});
$('#map-stage').addEventListener('pointerover',e=>{const p=e.target.closest('[data-map-dept]');if(p&&state.region)$('#map-hint').textContent=`${p.dataset.mapDept} · ${deptName(p.dataset.mapDept)} — cliquer pour explorer`;});
$('#map-stage').addEventListener('pointerleave',updateMap);
$('#map-reset').onclick=()=>selectTerritory();
$('#search').addEventListener('input',e=>{state.q=e.target.value;render();});
$('#sort').onchange=e=>{state.sort=e.target.value;render();};
$('#include-regional').onclick=()=>{state.includeRegional=!state.includeRegional;render();};
$('#include-national').onclick=()=>{state.includeNational=!state.includeNational;if(!state.includeNational&&state.topic==='Réglementation nationale')state.topic='';render();};
for(const k of ['type','org','year','status'])$(`#${k}-filter`).onchange=e=>{state[k]=e.target.value;render();};
$('#advanced-toggle').onclick=()=>{const hidden=!$('#advanced-filters').hidden;$('#advanced-filters').hidden=hidden;$('#advanced-toggle').setAttribute('aria-expanded',String(!hidden));};
$('#favorites-button').onclick=()=>{state.saved=!state.saved;render();$('#bibliotheque').scrollIntoView({behavior:'smooth'});};
$('#method-button').onclick=()=>$('#method-dialog').showModal();$('.dialog-close').onclick=()=>$('#method-dialog').close();
$('#method-dialog').addEventListener('click',e=>{if(e.target===$('#method-dialog')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close();}});
$('#share').onclick=async()=>{try{await navigator.clipboard.writeText(location.href);toast('Lien de la recherche copié.');}catch{toast('Copiez l’adresse de cette page pour partager la recherche.');}};
$('#export').onclick=()=>{const url=URL.createObjectURL(new Blob([toCSV(results)],{type:'text/csv;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='atlas-solaire-selection.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),500);toast(`${results.length} références exportées.`);};
document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)&&!$('#method-dialog').open){e.preventDefault();$('#search').focus();}});
addEventListener('popstate',()=>{fromURL();render();});
async function json(path){const response=await fetch(path);if(!response.ok)throw new Error(path);return response.json();}
try{
 [docs,regions]=await Promise.all([json('./data/documents.json'),json('./data/regions.json')]);
 try{const report=await json('./data/link-checks.json');linkChecks=Object.fromEntries(report.results.map(r=>[r.id,r]));$('#inventory-date').textContent='Liens contrôlés le '+new Date(report.checkedAt).toLocaleDateString('fr-FR');}catch{$('#inventory-date').textContent='Inventaire du 28 septembre 2026';}
 $('#total-count').textContent=docs.length;sidebar();fromURL();render();
 if(['type','org','year','status'].some(k=>state[k])){$('#advanced-filters').hidden=false;$('#advanced-toggle').setAttribute('aria-expanded','true');}
 try{drawMap(await json('./assets/departements.geojson'));render();}catch{$('#map-stage').innerHTML='<p class="loading">Carte indisponible. Utilisez la liste des départements ci-dessous.</p>';}
}catch(error){$('#documents').setAttribute('aria-busy','false');$('#documents').innerHTML='<div class="empty-state"><h4>Le catalogue n’a pas pu être chargé.</h4><p>Lancez le serveur local avec <code>npm start</code>, puis rechargez la page.</p><a href="./SOURCES.md">Consulter le registre des sources</a></div>';$('#results-count').textContent='Catalogue indisponible';console.error(error);}
