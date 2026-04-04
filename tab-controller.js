function switchTab(tabName) {
    const root = document.getElementById("tab-content-root");
    
    // ប្តូរពណ៌ប៊ូតុង Active (Optional)
    updateTabStyles(tabName);

    // លុបសាច់រឿងចាស់ចេញ រួចដាក់សាច់រឿងថ្មីចូល
    if (tabName === 'novel') {
        renderNovelPage();
    } else if (tabName === 'manga') {
        renderMangaPage();
    } else if (tabName === 'chat') {
        renderChatStoryPage();
    }
}

// គំរូការបង្ហាញទំព័រ Manga
function renderMangaPage() {
    document.getElementById("tab-content-root").innerHTML = `
        <div class="manga-slider">...កូដស្លាយ Manga...</div>
        <div class="manga-grid">...បញ្ជីរឿង Manga...</div>
    `;
}
