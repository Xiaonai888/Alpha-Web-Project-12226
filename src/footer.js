(function () {
    function buildFooter() {
        // លុប footer ចាស់ទាំងអស់
        document.querySelectorAll('footer, #app-footer').forEach(function(el) { el.remove(); });

        // រកថាកំពុងនៅ page ណា
        var page = location.pathname.split('/').pop() || 'index.html';
        if (page === '') page = 'index.html';

        var nav = [
            { href: 'index.html',    icon: 'fa-heart',       label: 'For You'  },
            { href: 'fast.html',     icon: 'fa-circle-play', label: 'Fast'     },
            { href: 'discover.html', icon: 'fa-compass',     label: 'Discover' },
            { href: 'library.html',  icon: 'fa-book',        label: 'Library'  },
            { href: 'me.html',       icon: 'fa-face-smile',  label: 'Mine'     },
        ];

        // build items
        var itemsHTML = '';
        for (var i = 0; i < nav.length; i++) {
            var n = nav[i];
            var isActive = (page === n.href) ||
                           (page === 'search.html' && n.href === 'discover.html');
            var color = isActive ? '#1d4ed8' : '#9ca3af';
            itemsHTML += '<a href="' + n.href + '" style="' +
                'display:flex;flex-direction:column;align-items:center;justify-content:center;' +
                'width:56px;text-decoration:none;color:' + color + ';gap:3px;' +
                '">' +
                '<i class="fa-solid ' + n.icon + '" style="font-size:20px;"></i>' +
                '<span style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.03em;">' + n.label + '</span>' +
                '</a>';
        }

        // สร้าง footer element
        var footer = document.createElement('footer');
        footer.id = 'app-footer';
        footer.innerHTML = '<div id="app-footer-inner">' + itemsHTML + '</div>';

        // style footer — pure inline ไม่พึ่ง Tailwind
        footer.setAttribute('style', [
            'position:fixed',
            'bottom:0',
            'left:0',
            'right:0',
            'width:100%',
            'background:rgba(255,255,255,0.97)',
            'border-top:1px solid #f1f5f9',
            'box-shadow:0 -4px 16px rgba(0,0,0,0.06)',
            'z-index:99999',
            'padding-top:10px',
            'padding-bottom:calc(10px + env(safe-area-inset-bottom, 0px))',
            'box-sizing:border-box',
            '-webkit-backdrop-filter:blur(10px)',
            'backdrop-filter:blur(10px)'
        ].join(';'));

        // style inner div
        document.getElementById && setTimeout(function() {
            var inner = document.getElementById('app-footer-inner');
            if (inner) {
                inner.setAttribute('style', [
                    'display:flex',
                    'justify-content:center',
                    'align-items:center',
                    'gap:32px',
                    'max-width:480px',
                    'margin:0 auto',
                    'padding:0 8px'
                ].join(';'));
            }
        }, 0);

        document.body.appendChild(footer);

        // sync body padding ให้ตรงกับ footer height จริง
        function sync() {
            var h = footer.getBoundingClientRect().height;
            if (h > 0) document.body.style.paddingBottom = h + 'px';
        }
        sync();
        window.addEventListener('resize', sync);
        window.addEventListener('load', sync);
    }

    // รอ DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', buildFooter);
    } else {
        buildFooter();
    }
})();
