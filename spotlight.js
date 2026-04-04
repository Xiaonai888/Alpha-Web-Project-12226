// spotlight.js
document.addEventListener("DOMContentLoaded", function() {
    const spotlightContainer = document.getElementById("spotlight-root");

    if (spotlightContainer) {
        spotlightContainer.innerHTML = `
            <div class="px-4 py-8">
                <h3 class="font-bold text-gray-800 mb-5 text-lg italic">Alpha Spotlight</h3>
                <div class="flex space-x-5 overflow-x-auto no-scrollbar pb-3">
                    
                    <a href="fast.html" class="min-w-[80%] md:min-w-[350px] aspect-[16/10] bg-gray-100 rounded-2xl overflow-hidden relative group border border-gray-100 shadow-sm transition-all">
                        <img src="https://via.placeholder.com/800x500?text=Spotlight+1" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 text-white">
                            <div class="flex items-center space-x-2 mb-1.5">
                                <span class="bg-blue-600 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Fantasy</span>
                                <span class="text-[11px] font-medium opacity-90">EP 125</span>
                            </div>
                            <h4 class="font-bold text-lg leading-tight truncate">The Last Sovereign</h4>
                        </div>
                    </a>

                    <a href="fast.html" class="min-w-[80%] md:min-w-[350px] aspect-[16/10] bg-gray-100 rounded-2xl overflow-hidden relative group border border-gray-100 shadow-sm transition-all">
                        <img src="https://via.placeholder.com/800x500?text=Spotlight+2" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
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
    }
});
<script src="spotlight.js"></script>
    <script src="footer.js"></script>
</body>
