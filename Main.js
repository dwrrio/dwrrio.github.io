(function () {
  const tabs   = document.querySelectorAll('.nav-links a[data-tab]');
  const panels = document.querySelectorAll('main section[id]');

  function activate(tabId) {
    tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tabId));
    panels.forEach(p => p.classList.toggle('active', p.id === tabId));
    history.replaceState(null, '', '#' + tabId);
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      e.preventDefault();
      activate(tab.dataset.tab);
    });
  });

  const brand = document.querySelector('[data-tab-brand]');
  if (brand) brand.addEventListener('click', e => { e.preventDefault(); activate('home'); });

  const hash = location.hash.replace('#', '');
  const validIds = Array.from(panels).map(p => p.id);
  activate(validIds.includes(hash) ? hash : 'home');
})();
