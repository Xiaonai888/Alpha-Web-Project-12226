(function () {
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';

  const ACTIVE   = 'text-blue-600';
  const INACTIVE = 'text-gray-400 hover:text-blue-600 transition-colors';

  const nav = [
    { href: 'index.html',    icon: 'fa-heart',        label: 'For You'  },
    { href: 'fast.html',     icon: 'fa-circle-play',  label: 'Fast'     },
    { href: 'discover.html', icon: 'fa-compass',      label: 'Discover' },
    { href: 'library.html',  icon: 'fa-book',         label: 'Library'  },
    { href: 'me.html',       icon: 'fa-face-smile',   label: 'Mine'     },
  ];

  const items = nav.map(n => {
    const isActive = page === n.href || (page === 'search.html' && n.href === 'discover.html');
    const cls = isActive ? ACTIVE : INACTIVE;
    return `
      <a href="${n.href}" class="flex flex-col items-center ${cls} w-14 no-underline">
        <i class="fa-solid ${n.icon} text-xl"></i>
        <span class="text-[9px] mt-1 font-bold uppercase tracking-tighter">${n.label}</span>
      </a>`;
  }).join('');

  document.querySelectorAll('#app-footer').forEach(el => el.remove());

  const footer = document.createElement('footer');
  footer.id = 'app-footer';
  footer.innerHTML = `<div class="flex justify-around items-center max-w-lg mx-auto h-full px-2">${items}</div>`;
  document.body.appendChild(footer);

  Object.assign(footer.style, {
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0',
    height: '65px',
    background: 'rgba(255,255,255,0.95)',
    borderTop: '1px solid #f1f5f9',
    boxShadow: '0 -5px 20px rgba(0,0,0,0.05)',
    zIndex: '10000',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxSizing: 'border-box',
    paddingBottom: 'env(safe-area-inset-bottom, 0px)',
  });

  function syncBodyPadding() {
    document.body.style.paddingBottom = footer.offsetHeight + 'px';
  }

  window.addEventListener('load', syncBodyPadding);
  window.addEventListener('resize', syncBodyPadding);
  syncBodyPadding();
})();
