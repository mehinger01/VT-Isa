const navItems = [
  ['Home', 'index.html'],
  ['System Mapper', 'system-mapper.html'],
  ['Energy Dashboard', 'energy-dashboard.html'],
  ['Reset Builder', 'reset-builder.html'],
  ['Session Agendas', 'session-agendas.html'],
  ['Session Minutes', 'session-minutes.html'],
  ['Resources', 'resources.html']
];

function renderNavigation() {
  const mount = document.querySelector('[data-navigation]');
  if (!mount) return;
  const current = location.pathname.split('/').pop() || 'index.html';
  mount.innerHTML = `
    <header class="site-header">
      <div class="container nav-wrap">
        <a class="brand" href="index.html" aria-label="Isa's Executive Functioning OS home">
          <span class="brand-mark">I</span><span>Isa OS</span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">Menu</button>
        <nav id="primary-nav" class="primary-nav" aria-label="Primary navigation">
          ${navItems.map(([label, href]) => `<a href="${href}" ${current === href ? 'aria-current="page"' : ''}>${label}</a>`).join('')}
        </nav>
      </div>
    </header>`;
  const toggle = mount.querySelector('.nav-toggle');
  const nav = mount.querySelector('.primary-nav');
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });
}

document.addEventListener('DOMContentLoaded', renderNavigation);
