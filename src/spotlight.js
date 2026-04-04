document.addEventListener("DOMContentLoaded", function() {
    const spotlightContainer = document.getElementById("spotlight-root");

    if (spotlightContainer) {
        // ១. បង្កើតបញ្ជីទិន្នន័យ Banner ទាំង ៦ (You អាចដូររូបភាព និងចំណងជើងនៅទីនេះ)
        const spotlightData = [
            { title: "The Last Sovereign", ep: "125", tag: "FANTASY", color: "bg-blue-600", img: "https://via.placeholder.com/800x500?text=Novel+1" },
            { title: "Love Beyond Stars", ep: "45", tag: "ROMANCE", color: "bg-orange-500", img: "https://via.placeholder.com/800x500?text=Novel+2" },
            { title: "Shadow Realm", ep: "89", tag: "ACTION", color: "bg-red-600", img: "https://via.placeholder.com/800x500?text=Novel+3" },
            { title: "Golden Era", ep: "210", tag: "SYSTEM", color: "bg-yellow-500", img: "https://via.placeholder.com/800x500?text=Novel+4" },
            { title: "Deep Sea Mystery", ep: "12", tag: "MYSTERY", color: "bg-purple-600", img: "https://via.placeholder.com/800x500?text=Novel+5" },
            { title: "School Legend", ep: "67", tag: "SCHOOL", color: "bg-green-600", img: "https://via.placeholder.com/800x500?text=Novel+6" }
        ];

        // ២. បង្កើត HTML សម្រាប់ Card នីមួយៗដោយប្រើ Loop
        let cardsHTML = spotlightData.map(item => `
            <a href="fast.html" class="min-w-[85%] md:min-w-[350px] aspect-[16/10] bg-gray-100 rounded-2xl overflow-hidden relative group border border-gray-100 shadow-sm transition-all snap-center shrink-0">
                <img src="${item.img}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                <div class="absolute bottom-4 left-4 text-white">
                    <div class="flex items-center space-x-2 mb-1.5">
                        <span class="${item.color} text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">${item.tag}</span>
                        <span class="text-[11px] font-medium opacity-90">EP ${item.ep}</span>
                    </div>
                    <h4 class="font-bold text-lg leading-tight truncate">${item.title}</h4>
                </div>
            </a>
        `).join('');

        // ៣. ចាក់បញ្ចូលទៅក្នុង Container
        spotlightContainer.innerHTML = `
            <div class="px-4 py-8">
                <h3 class="font-bold text-gray-800 mb-5 text-lg italic">Alpha Spotlight</h3>
                <div id="spotlight-scroll" class="flex space-x-5 overflow-x-auto no-scrollbar pb-3 scroll-smooth snap-x snap-mandatory">
                    ${cardsHTML}
                </div>
            </div>
        `;

        // ៤. Logic សម្រាប់ Auto-Slide (៥ វិនាទីម្តង សម្រាប់តែទូរសព្ទ)
        const scrollContainer = document.getElementById("spotlight-scroll");
        if (window.innerWidth < 768 && scrollContainer) {
            let currentIndex = 0;
            const totalItems = spotlightData.length;

            setInterval(() => {
                currentIndex++;
                if (currentIndex >= totalItems) {
                    currentIndex = 0; // ត្រឡប់ទៅដើមវិញ
                }

                const itemWidth = scrollContainer.querySelector('a').offsetWidth + 20; // បូកគម្លាត space-x-5
                scrollContainer.scrollTo({
                    left: currentIndex * itemWidth,
                    behavior: 'smooth'
                });
            }, 5000); // ៥ វិនាទី
        }
    }
});
