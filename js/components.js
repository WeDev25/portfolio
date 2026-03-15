async function loadComponent(url) {
  const response = await fetch(url);
  return response.text();
}

async function initComponents() {
  const navbarContainer = document.getElementById('navbar');
  const footerContainer = document.getElementById('footer');
  
  if (navbarContainer) {
    navbarContainer.innerHTML = await loadComponent('components/navbar.html');
  }
  
  if (footerContainer) {
    footerContainer.innerHTML = await loadComponent('components/footer.html');
  }
  
  highlightCurrentPage();
}

function highlightCurrentPage() {
  let currentPage = window.location.pathname.split('/').pop();
  if (!currentPage || currentPage === '' || currentPage === '/') {
    currentPage = 'index.html';
  }
  
  if (!currentPage.endsWith('.html')) {
    currentPage = currentPage + '.html';
  }
  
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
