let composers = [];

async function fetchComposers() {
    try {
        composers = await fetchEssentialComposers();
        displayComposers(composers);
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayComposers(composers) {
    const musicListContainer = document.querySelector(".music-list");
    musicListContainer.innerHTML = "";

    if (composers.length === 0) {
        musicListContainer.innerHTML = `<p>No results found.</p>`;
        return;
    }

    composers.forEach(composer => {
        musicListContainer.innerHTML += `
          <div class="music-card" data-id="${composer.id}">
            <div class="music-info">
              <img src="${composer.portrait}" alt="Composer Portrait" class="composer-portrait" />
              <h2 class="composer-name">${composer.name.toUpperCase()}</h2>
              <p class="composer-fullname">${composer.complete_name}</p>
              <p class="composer-genre">Epoch: ${composer.epoch}</p>
              <p class="composer-birthyear">(${composer.birth.slice(0, 4)}${composer.death ? `-${composer.death.slice(0, 4)}` : ''})</p>
              <a href="composer.html"><button class="read-more">Read More</button></a>
            </div>
            <div class="music-info"></div>
          </div>`;
    });

    musicListContainer.addEventListener('click', (event) => {
        const card = event.target.closest('.music-card');
        if (card) {
            const composerId = card.getAttribute('data-id');
            saveComposerId(composerId);
        }
    });
}

document.getElementById('search-bar').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const filteredComposers = composers.filter(composer => 
        composer.name.toLowerCase().includes(searchTerm)
    );
    displayComposers(filteredComposers);
});

async function initializeAllMusicPage() {
    await fetchComposers();
}

initializeAllMusicPage();
