// Tabs (visual only)
const tabs = document.getElementById('tabs');
if (tabs) {
  tabs.addEventListener('click', e=>{
    if(e.target.tagName!=='BUTTON') return;
    [...e.currentTarget.children].forEach(b=>b.classList.remove('active'));
    e.target.classList.add('active');
  });
}

// Page navigation
const nav = document.getElementById('nav');
nav.addEventListener('click', e=>{
  if(e.target.matches('a[data-page]')){
    e.preventDefault();
    go(e.target.dataset.page);
  }
});
function go(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('show'));
  document.getElementById(id).classList.add('show');
  document.querySelectorAll('.nav a').forEach(a=>a.classList.toggle('active', a.dataset.page===id));
  window.scrollTo({top:0,behavior:'smooth'});
}

// Clamp manual numbers within min/max
function clampNumber(id){
  const el = document.getElementById(id);
  if(!el) return;
  el.addEventListener('input', () => {
    const min = +el.min || 0;
    const max = +el.max || Infinity;
    let v = el.value === '' ? '' : +el.value;
    if (v !== '' && !Number.isNaN(v)) {
      if (v < min) el.value = min;
      if (v > max) el.value = max;
    }
  });
}
['rooms','adults','children'].forEach(clampNumber);