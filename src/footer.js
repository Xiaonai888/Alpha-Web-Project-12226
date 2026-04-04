(function () {
    function buildFooter() {
        // លុប footer ចាស់
        document.querySelectorAll('#app-footer').forEach(function (el) { el.remove(); });

        var page = location.pathname.split('/').pop() || 'index.html';

        var nav = [
            { href: 'index.html',    icon: 'fa-heart',       label: 'For You'  },
            { href: 'fast.html',     icon: 'fa-circle-play', label: 'Fast'     },
            { href: 'discover.html', icon: 'fa-compass',     label: 'Discover' },
            { href: 'library.html',  icon: 'fa-book',        label: 'Library'  },
            { href: 'me.html',       icon: 'fa-face-smile',  label: 'Mine'     },
        ];

        var html = '';
        nav.forEach(function (n) {
            var isActive = page === n.href || (page === 'search.html' && n.href === 'discover.html');
            var cls = isActive
                ? 'flex flex-col items-center w-14 text-blue-600 no-underline'
                : 'flex flex-col items-center w-14 text-gray-400 hover:text-blue-600 transition-colors no-underline';
            html += '<a href="' + n.href + '" class="' + cls + '" style="text-decoration:none;">'
                  + '<i class="fa-solid ' + n.icon + ' text-xl"></i>'
                  + '<span class="text-[9px] mt-1 font-bold uppercase">' + n.label + '</span>'
                  + '</a>';
        });

        var footer = document.createElement('footer');
        footer.id = 'app-footer';
        footer.className = 'fixed bottom-0 left-0 right-0 w-full bg-white/95 border-t border-gray-100 z-[99999]';
        footer.style.cssText = 'padding-top:10px;padding-bottom:calc(10px + env(safe-area-inset-bottom,0px));backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);box-shadow:0 -4px 20px rgba(0,0,0,0.06);';

        var inner = document.createElement('div');
        inner.className = 'flex justify-center items-center gap-8 max-w-lg mx-auto px-2';
        inner.innerHTML = html;
        footer.appendChild(inner);
        document.body.appendChild(footer);

        function sync() {
            var h = footer.getBoundingClientRect().height;
            if (h > 0) document.body.style.paddingBottom = h + 'px';
        }
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', sync);
        } else { sync(); }
        window.addEventListener('resize', sync);
        window.addEventListener('load', sync);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', buildFooter);
    } else {
        buildFooter();
    }
})();
