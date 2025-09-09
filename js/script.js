// Petit script pour l'interaction minimale
document.addEventListener('DOMContentLoaded',function(){
  const yearEls = [
    document.getElementById('year'),
    document.getElementById('year2'),
    document.getElementById('year3'),
  document.getElementById('year4'),
  document.getElementById('year5')
  ]
  yearEls.forEach(el=>{ if(el) el.textContent = new Date().getFullYear() })

  const toggle = document.getElementById('nav-toggle')
    || document.getElementById('nav-toggle-2')
    || document.getElementById('nav-toggle-3')
  || document.getElementById('nav-toggle-4')
  || document.getElementById('nav-toggle-5')
  if(toggle){
    toggle.addEventListener('click',()=>{
      const nav = document.querySelector('.nav')
      if(nav) nav.style.display = (nav.style.display==='flex')? 'none' : 'flex'
    })
  }

  // Modal logic
  const modalBtns = document.querySelectorAll('.btn-modal');
  modalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = document.querySelector(btn.dataset.modalTarget);
      if (modal) {
        modal.style.display = 'block';
      }
    });
  });

  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }
    window.addEventListener('click', (event) => {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  });
})
