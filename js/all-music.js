async function initializeAllMusicPage() {
    try {
        let composers = await fetchEssentialComposers();
        displayComposers(composers);
    } catch (error) {
        console.error('Error:', error);
    }
}


async function displayComposers(composers) {
    console.log("Displaying Composers...", composers);

    const musicListContainer = document.querySelector(".music-list");
    musicListContainer.innerHTML = "";
        

    // Music cards content added here dinamically
    composers.forEach(composer => {
        musicListContainer.innerHTML += `
               
        <div class="music-card">
          <!-- Music items will be loaded here from the api -->
          <div class="music-info">
            <img
              src=" ${composer.portrait}"
             
              alt="Composer Portrait"
              class="composer-portrait"
            />
            <h2 class="composer-name">${composer.name.toUpperCase()}</h2>
            <p class="composer-fullname">${composer.complete_name}</p>
            <p class="composer-genre">Epoch: ${composer.epoch}</p>
            <p class="composer-birthyear">(${composer.birth.slice(0, 4)}${composer.death ? `-${composer.death.slice(0, 4)}` : ''})</p>
                      <a href="composer.html"
              ><button class="read-more">Read More</button></a
            >
            </div>
          <div class="music-info">

            <button class="favorite-toggle">&#9733;</button>

          </div>
        </div>`;
    });
}


initializeAllMusicPage();
