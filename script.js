const button=document.querySelector('.menu-button');
const nav=document.querySelector('.nav-links');
button.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const date=document.querySelector('input[type="date"]'); if(date) date.min=new Date().toISOString().split('T')[0];
function form(id,messageId,text){document.getElementById(id).addEventListener('submit',e=>{e.preventDefault();document.getElementById(messageId).textContent=text;e.target.reset();});}
form('quickForm','quickMessage','Thank you. We will contact you to confirm availability.');
form('contactForm','contactMessage','Thank you. Your quotation request has been received.');
document.getElementById('year').textContent=new Date().getFullYear();
