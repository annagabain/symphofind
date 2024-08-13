async function initializeAllMusicPage() {
    try {
        let composers = await fetchEssentialComposers();
        displayComposers(composers);
    } catch (error) {
        console.error('Error:', error);
    }
}


function displayComposers(composers) {
    console.log("Displaying Composers...", composers);

    const musicListContainer = document.querySelector(".music-list");
    musicListContainer.innerHTML = "";

    // Add the rest of the music cards content here dinamically
    composers.forEach(composer => {
        musicListContainer.innerHTML += `
               
        <div class="music-card">
          <!-- Music items will be loaded here from the api -->

          <div class="music-info">
            <img
              src="images/bach.jpg"
              alt="Composer Portrait"
              class="composer-portrait"
            />
            <h2 class="composer-name">${composer.name.toUpperCase()}</h2>
            <p class="composer-fullname">Johann Sebastian Bach</p>
            <p class="composer-genre">Genre: Baroque</p>
            <p class="composer-birthyear">(1685-1750)</p>
          </div>
          <div class="music-info">
            <button class="favorite-toggle">&#9733;</button>
            <p class="composer-works">Works: Symphony No.1, Sonata No.2</p>
            <a href="composer.html"
              ><button class="read-more">Read More</button></a
            >
          </div>
        </div>`;
    });
}


initializeAllMusicPage();
