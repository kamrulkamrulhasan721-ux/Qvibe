// Qvibe — Smooth Page Transitions
document.addEventListener('DOMContentLoaded', () => {
  // Page enter animation
  document.body.style.opacity = '0';
  document.body.style.transform = 'translateY(8px)';
  document.body.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
    document.body.style.transform = 'translateY(0)';
  }, 10);

  // All links — smooth exit
  document.querySelectorAll('a, [onclick]').forEach(el => {
    const onclick = el.getAttribute('onclick');
    if(onclick && onclick.includes('location.href')) {
      el.addEventListener('click', function(e) {
        const match = onclick.match(/href='([^']+)'/);
        if(match) {
          e.preventDefault();
          navigateTo(match[1]);
        }
      });
    }
  });
});

function navigateTo(url) {
  document.body.style.opacity = '0';
  document.body.style.transform = 'translateY(-8px)';
  document.body.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
  setTimeout(() => {
    window.location.href = url;
  }, 250);
}