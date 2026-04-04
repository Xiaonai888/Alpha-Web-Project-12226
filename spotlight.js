document.addEventListener("DOMContentLoaded", function() {
    const spotlightContainer = document.getElementById("spotlight-root");

    if (spotlightContainer) {
        // ១. ចាក់បញ្ចូល HTML Content
        spotlightContainer.innerHTML = `
            <div class="px-4 py-8">
                <h3 class="font-bold text-gray-800 mb-5 text-lg italic">Alpha Spotlight</h3>
                <div id="spotlight-scroll" class="flex space-x-5 overflow-x-auto no-scrollbar pb-3 scroll-smooth snap-x snap-mandatory">
                    
                    <a href="fast.html" class="min-w-[85%] md:min-w-[350px] aspect-[16/10] bg-gray-100 rounded-2xl overflow-hidden relative group border border-gray-100 shadow-sm transition-all snap-center">
                        <img src="https://via.placeholder.com/800x500?text=Spotlight+1" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 text-white">
                            <div class="flex items-center space-x-2 mb-1.5">
                                <span class="bg-blue-600 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Fantasy</span>
                                <span class="text-[11px] font-medium opacity-90">EP 125</span>
                            </div>
                            <h4 class="font-bold text-lg leading-tight truncate">The Last Sovereign</h4>
                        </div>
                    </a>

                    <a href="fast.html" class="min-w-[85%] md:min-w-[350px] aspect-[16/10] bg-gray-100 rounded-2xl overflow-hidden relative group border border-gray-100 shadow-sm transition-all snap-center">
                        <img src="https://via.placeholder.com/800x500?text=Spotlight+2" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 text-white">
                            <div class="flex items-center space-x-2 mb-1.5">
                                <span class="bg-orange-500 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Romance</span>
                                <span class="text-[11px] font-medium opacity-90">EP 45</span>
                            </div>
                            <h4 class="font-bold text-lg leading-tight truncate">Love Beyond Stars</h4>
                        </div>
                    </a>

                </div>
            </div>
        `;

        // ២. Logic សម្រាប់ Auto-Slide រៀងរាល់ ៥ វិនាទី (សម្រាប់តែទូរសព្ទ)
        const scrollContainer = document.getElementById("spotlight-scroll");
        let isMobile = window.innerWidth < 768;

        if (isMobile && scrollContainer) {
            let scrollIndex = 0;
            const items = scrollContainer.querySelectorAll('a');

            setInterval(() => {
                scrollIndex++;
                if (scrollIndex >= items.length) {
                    scrollIndex = 0; // ត្រឡប់ទៅ Card ទី១ វិញ
                }

                const scrollAmount = items[scrollIndex].offsetLeft - scrollContainer.offsetLeft - 16; 
                scrollContainer.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }, 5000); // ៥០០០ មីលីវិនាទី = ៥ វិនាទី
        }
    }
});
