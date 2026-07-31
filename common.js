window.IsaOS={read(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}},write(key,value){localStorage.setItem(key,JSON.stringify(value));this.toast('Saved automatically')},toast(message){let t=document.querySelector('.toast');if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t)}t.textContent=message;t.classList.add('show');clearTimeout(this._timer);this._timer=setTimeout(()=>t.classList.remove('show'),1200)},footer(){const mount=document.querySelector('[data-footer]');if(mount)mount.innerHTML='<footer class="footer"><div class="container footer-inner"><strong>Isa Executive Functioning OS</strong><span>Progress without burnout.</span></div></footer>'}};

document.addEventListener('DOMContentLoaded',()=>{
  IsaOS.footer();

  const isStudentLearningLab=location.pathname.endsWith('session-3-learning-lab.html');
  if(!isStudentLearningLab)return;

  // Keep Isa's experience completely client-facing.
  document.querySelectorAll('.tutor-only').forEach(el=>el.remove());
  const facilitatorToggle=document.getElementById('facilitatorToggle');
  if(facilitatorToggle)facilitatorToggle.remove();
  document.querySelectorAll('.instruction.warning').forEach(el=>{
    const panel=el.closest('.panel');
    if(panel)panel.remove();
  });

  // Every stage transition begins at the top of the newly displayed stage.
  document.addEventListener('click',event=>{
    const trigger=event.target.closest('[data-next],[data-prev],.lab-nav button[data-stage]');
    if(!trigger)return;
    window.setTimeout(()=>{
      const activeStage=document.querySelector('.stage.active');
      if(!activeStage)return;
      const stickyBar=document.querySelector('.control-bar');
      const stickyOffset=(stickyBar?.offsetHeight||0)+16;
      const top=activeStage.getBoundingClientRect().top+window.scrollY-stickyOffset;
      window.scrollTo({top:Math.max(0,top),behavior:'smooth'});
      const heading=activeStage.querySelector('h2');
      if(heading){heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true});}
    },0);
  });
});
