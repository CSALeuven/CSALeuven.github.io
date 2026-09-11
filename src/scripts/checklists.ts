export function initializeChecklists() {
  document.querySelectorAll<HTMLElement>('[data-checklist]').forEach(root=>{
    if(root.dataset.initialized)return;root.dataset.initialized='true';
    const key='csal-handbook-2024:'+root.dataset.checklist;
    const boxes=Array.from(root.querySelectorAll<HTMLInputElement>('input[type=checkbox]'));
    let storageWorks=true;
    try {const saved:unknown=JSON.parse(localStorage.getItem(key)??'[]');if(Array.isArray(saved))boxes.forEach(box=>box.checked=saved.includes(box.value));} catch {storageWorks=false;}
    const progress=root.querySelector<HTMLElement>('[data-check-progress]');
    const update=()=>{if(progress)progress.textContent=root.dataset.lang==='en'?`${boxes.filter(b=>b.checked).length} / ${boxes.length} checked. ${storageWorks?'Saved in this browser.':'Storage unavailable; checks last for this page visit.'}`:`已勾选 ${boxes.filter(b=>b.checked).length} / ${boxes.length} 项。${storageWorks?'保存在此浏览器。':'浏览器存储不可用，本次页面访问仍可勾选。'}`;};
    const save=()=>{try{localStorage.setItem(key,JSON.stringify(boxes.filter(b=>b.checked).map(b=>b.value)));}catch{storageWorks=false;}update();};
    boxes.forEach(box=>box.addEventListener('change',save));
    root.querySelector('[data-reset-checklist]')?.addEventListener('click',()=>{boxes.forEach(b=>b.checked=false);save();});
    root.querySelector('[data-print]')?.addEventListener('click',()=>window.print());update();
  });
}
