var IM={Em:'images/Em.webp',Ea:'images/Ea.webp',Eb:'images/Eb.webp',Rm:'images/Rm.webp',Ra:'images/Ra.webp',Rb:'images/Rb.webp'};
var P={espresso:'projects/espresso-lab.html',rose:'projects/rose-valley.html'};
document.querySelectorAll('[data-k]').forEach(function(i){i.src=IM[i.dataset.k]});document.documentElement.classList.add('js');
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches,hov=matchMedia('(hover:hover)').matches;
var n=0;document.querySelectorAll('.hero .ln').forEach(function(l){var t=l.textContent;l.textContent='';for(var c of t){var s=document.createElement('span');s.className='ch';s.style.setProperty('--i',n++);s.textContent=c;l.appendChild(s)}});
document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:rm?'auto':'smooth',block:'start'})}})});
if(!('IntersectionObserver' in window)){window.IntersectionObserver=function(){this.observe=function(){};this.unobserve=function(){}};document.querySelectorAll('.frame').forEach(function(f){f.classList.add('in')})}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)document.body.dataset.theme=e.target.dataset.theme})},{rootMargin:'-45% 0px -45% 0px'});
document.querySelectorAll('section[data-theme]').forEach(function(s){io.observe(s)});
var io2=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io2.unobserve(e.target)}})},{threshold:.25});
document.querySelectorAll('.frame').forEach(function(f){io2.observe(f)});
if(hov&&!rm){
 var st=document.querySelector('.stack'),hero=document.querySelector('.hero');
 hero.addEventListener('pointermove',function(e){var r=hero.getBoundingClientRect();st.style.setProperty('--mx',((e.clientX-r.left)/r.width-.5)*2);st.style.setProperty('--my',((e.clientY-r.top)/r.height-.5)*2)});
 document.querySelectorAll('.frame').forEach(function(f){f.addEventListener('pointermove',function(e){var r=f.getBoundingClientRect();f.style.setProperty('--ry',(((e.clientX-r.left)/r.width-.5)*10)+'deg');f.style.setProperty('--rx',(-((e.clientY-r.top)/r.height-.5)*8)+'deg')});f.addEventListener('pointerleave',function(){f.style.setProperty('--rx','0deg');f.style.setProperty('--ry','0deg')})});
 var m=document.getElementById('mag');m.addEventListener('pointermove',function(e){var r=m.getBoundingClientRect();m.style.transform='translate('+((e.clientX-r.left-r.width/2)*.2)+'px,'+((e.clientY-r.top-r.height/2)*.3)+'px)'});m.addEventListener('pointerleave',function(){m.style.transform=''});
}
var V=document.getElementById('viewer'),VF=document.getElementById('vf');
function closeV(){V.hidden=true;VF.removeAttribute('src');document.documentElement.style.overflow=''}
function openV(key,title,url){VF.src=P[key];url=P[key];
 document.getElementById('vt').textContent=title;document.getElementById('vo').href=url;V.hidden=false;document.documentElement.style.overflow='hidden'}
document.getElementById('vc').addEventListener('click',closeV);
addEventListener('keydown',function(e){if(e.key==='Escape'&&!V.hidden)closeV()});
document.querySelectorAll('.proj').forEach(function(s){var b=s.querySelector('.btn.main'),u=b.href,k=s.id,t=s.querySelector('.info h3').textContent;
 [b,s.querySelector('.frame'),s.querySelector('.info h3')].forEach(function(el){el.addEventListener('click',function(e){e.preventDefault();openV(k,t,u)})})});
var tk=false;function upd(){tk=false;var vh=innerHeight;
 if(!rm)document.querySelectorAll('.proj').forEach(function(s){var r=s.getBoundingClientRect(),p=Math.min(1,Math.max(0,(vh-r.top)/(vh+r.height)));s.querySelector('.big').style.setProperty('--p',p)});
 document.querySelectorAll('.frame:not(.in)').forEach(function(f){if(f.getBoundingClientRect().top<vh*.85)f.classList.add('in')});
 var tl=document.querySelector('.tl'),r=tl.getBoundingClientRect();tl.style.setProperty('--lp',Math.min(1,Math.max(0,(vh*.7-r.top)/r.height)))}
addEventListener('scroll',function(){if(!tk){tk=true;requestAnimationFrame(upd)}},{passive:true});upd();
