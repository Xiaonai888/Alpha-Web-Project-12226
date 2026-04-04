(function () {
  // Determine active page
  const page = location.pathname.split('/').pop() || 'index.html';

  const ACTIVE   = 'text-blue-600';
  const INACTIVE = 'text-gray-400 hover:text-blue-600 transition-colors';

  const nav = [
    { href: 'index.html',    icon: 'fa-heart',       label: 'For You'  },
    { href: 'fast.html',     icon: 'fa-circle-play', label: 'Fast'     },
    { href: 'discover.html', icon: 'fa-compass',     label: 'Discover' },
    { href: 'library.html',  icon: 'fa-book',        label: 'Library'  },
    { href: 'me.html',       icon: 'fa-face-smile',  label: 'Mine'     },
  ];

  const items = nav.map(n => {
    const isActive = page === n.href ||
      (page === 'search.html' && n.href === 'discover.html');
    const cls = isActive ? ACTIVE : INACTIVE;
    return `
      <a href="${n.href}" class="flex flex-col items-center ${cls} w-14">
        <i class="fa-solid ${n.icon} text-xl"></i>
        <span class="text-[9px] mt-1 font-bold uppercase">${n.label}</span>
      </a>`;
  }).join('');

  // Remove any existing <footer> first
  document.querySelectorAll('footer').forEach(el => el.remove());

  // Inject footer
  const footer = document.createElement('footer');
  footer.id = 'app-footer';
  footer.innerHTML = `<div class="flex justify-center items-center gap-8 max-w-lg mx-auto px-2">${items}</div>`;
  document.body.appendChild(footer);

  // Apply fixed styles via JS so they are 100% identical on every page
  Object.assign(footer.style, {
    position:        'fixed',
    bottom:          '0',
    left:            '0',
    right:           '0',
    background:      'rgba(255,255,255,0.97)',
    borderTop:       '1px solid #f1f5f9',
    boxShadow:       '0 -5px 20px rgba(0,0,0,0.05)',
    zIndex:          '9999',
    paddingTop:      '10px',
    paddingBottom:   'calc(10px + env(safe-area-inset-bottom, 0px))',
    backdropFilter:  'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxSizing:       'border-box',
    width:           '100%',
  });

  // Sync body bottom padding to exact footer height after render
  function syncBodyPadding() {
    const h = footer.getBoundingClientRect().height;
    document.body.style.paddingBottom = h + 'px';
  }

  // Run on load and on resize (desktop scrollbar can shift layout)
  window.addEventListener('load',   syncBodyPadding);
  window.addEventListener('resize', syncBodyPadding);
  // Also run immediately after DOM paint
  requestAnimationFrame(syncBodyPadding);
})();
