document.addEventListener('DOMContentLoaded', async () => {
  await initComponents();
  
  initTheme();
  renderTeamMembers();
  renderProjects();
  initMobileNav();
  initFooterYear();
  
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });
});
