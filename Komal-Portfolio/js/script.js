const progress=document.getElementById('scrollProgress');
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(h?window.scrollY/h*100:0)+'%';});
const menu=document.getElementById('menuToggle');const nav=document.getElementById('nav');if(menu)menu.addEventListener('click',()=>nav.classList.toggle('open'));
const theme=document.getElementById('themeBtn');if(theme)theme.addEventListener('click',()=>{document.body.classList.toggle('dark-mode');theme.textContent=document.body.classList.contains('dark-mode')?'☀':'☼';});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
