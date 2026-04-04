(function () {
    // ១. កំណត់រកមើលថា តើបច្ចុប្បន្នយើងកំពុងនៅទំព័រណា (Handling GitHub Pages)
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';

    const ACTIVE   = 'text-blue-600';
    const INACTIVE = 'text-gray-400 hover:text-blue-600 transition-colors';

    // ២. បញ្ជី Menu (You អាចប្តូរ Icon ឬឈ្មោះនៅទីនេះ)
    const nav = [
        { href: 'index.html',    icon: 'fa-heart',        label: 'For You'  },
        { href: 'fast.html',     icon: 'fa-circle-play',  label: 'Fast'      },
        { href: 'discover.html', icon: 'fa-compass',      label: 'Discover' },
        { href: 'library.html',  icon: 'fa-book',         label: 'Library'  },
        { href: 'me.html',       icon: 'fa-face-smile',   label: 'Mine'      },
    ];

    // ៣. បង្កើត HTML សម្រាប់ប៊ូតុងនីមួយៗ
    const items = nav.map(n => {
        // ឆែកមើលថា តើប៊ូតុងណាដែលត្រូវភ្លឺពណ៌ខៀវ
        const isActive = page === n.href || (page === 'search.html' && n.href === 'discover.html');
        const cls = isActive ? ACTIVE : INACTIVE;

        return `
            <a href="${n.href}" class="flex flex-col items-center ${cls} w-14 transition-all active:scale-90">
                <i class="fa-solid ${n.icon} text-xl"></i>
                <span class="text-[9px] mt-1 font-bold uppercase tracking-tighter">${n.label}</span>
            </a>`;
    }).join('');

    // ៤. លុប Footer ចាស់ៗចេញដើម្បីការពារការជាន់គ្នា
    document.querySelectorAll('#app-footer').forEach(el => el.remove());

    // ៥. បង្កើត Footer ថ្មី និងចាក់បញ្ចូលទៅក្នុង Body
    const footer = document.createElement('footer');
    footer.id = 'app-footer';
    footer.innerHTML = `
        <div class="flex justify-between items-center max-w-md mx-auto px-6 h-full">
            ${items}
        </div>
    `;
    document.body.appendChild(footer);

    // ៦. កំណត់ស្ទីល CSS (Fixed នៅខាងក្រោមបង្អស់)
    Object.assign(footer.style, {
        position:        'fixed',
        bottom:          '0',
        left:            '0',
        right:           '0',
        height:          '65px',
        background:      'rgba(255,255,255,0.92)',
        borderTop:       '1px solid #f1f5f9',
        boxShadow:       '0 -5px 20px rgba(0,0,0,0.03)',
        zIndex:          '10000',
        backdropFilter:  'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
        boxSizing:       'border-box',
        paddingBottom:   'env(safe-area-inset-bottom, 0px)',
    });

    // ៧. បន្ថែមចន្លោះ (Padding) ឱ្យ Body កុំឱ្យ Footer បាំងសាច់រឿងខាងក្រោម
    function syncBodyPadding() {
        document.body.style.paddingBottom = '80px';
    }

    syncBodyPadding();
    window.addEventListener('resize', syncBodyPadding);
})();
