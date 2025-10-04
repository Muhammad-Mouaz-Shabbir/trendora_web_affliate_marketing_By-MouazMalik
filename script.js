document.addEventListener('DOMContentLoaded',()=>{
  // Fix header positioning to original centered position
  const header = document.querySelector('.site-header');
  if(header) {
    header.style.position = 'fixed';
    header.style.top = '10px';
    header.style.left = '0';
    header.style.right = '0';
    header.style.width = '60%';
    header.style.margin = '0 auto';
    header.style.transform = 'translateZ(0)';
    header.style.zIndex = '1040';
    header.style.backfaceVisibility = 'hidden';
    header.style.willChange = 'auto';
  }

  // Original navigation without transitions
  const navItems=document.querySelectorAll('.bottom-nav .nav-item');
  navItems.forEach(item=>{
    item.addEventListener('click',(e)=>{
      if(item.getAttribute('href') === '#') {
        e.preventDefault();
        navItems.forEach(n=>n.classList.remove('active'));
        item.classList.add('active');
      }
    });
  });

  // Category tap highlight
  const categoryCards=document.querySelectorAll('.category-card');
  categoryCards.forEach(card=>{
    card.addEventListener('click',()=>{
      categoryCards.forEach(c=>c.classList.remove('active'));
      card.classList.add('active');
    });
  });

  // Keep JS minimal for performance. Bootstrap handles swipe/auto cycle.
});

