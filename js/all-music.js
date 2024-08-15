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

  composers.forEach(composer => {
    musicListContainer.innerHTML += `
      <div class="music-card" data-id="${composer.id}">
        <div class="music-info">
          <img
            src="${composer.portrait}"
            alt="Composer Portrait"
            class="composer-portrait"
          />
          <h2 class="composer-name">${composer.name.toUpperCase()}</h2>
          <p class="composer-fullname">${composer.complete_name}</p>
          <p class="composer-genre">Epoch: ${composer.epoch}</p>
          <p class="composer-birthyear">(${composer.birth.slice(0, 4)}${composer.death ? `-${composer.death.slice(0, 4)}` : ''})</p>
          <a href="composer.html"><button class="read-more">Read More</button></a>
        </div>
        <div class="music-info">

        </div>
      </div>`;
  });

  // Add event listener for clicks on the music card
  musicListContainer.addEventListener('click', (event) => {
    const card = event.target.closest('.music-card');
    if (card) {
      const composerId = card.getAttribute('data-id');
      saveComposerId(composerId);
      window.location.href = "composer.html";
    }
  });
}

// function saveComposerId(composerId) {
//   localStorage.setItem('selectedComposerId', composerId);
// }


// async function displayComposers(composers) {
//     console.log("Displaying Composers...", composers);

//     const musicListContainer = document.querySelector(".music-list");


//     console.log(composers[0].id);
    
//     musicListContainer.innerHTML = "";
        

//     // Music cards content added here dinamically
//     composers.forEach(composer => {
//         musicListContainer.innerHTML += `

               
//         <div class="music-card">
//           <!-- Music items will be loaded here from the api -->
//           <div class="music-info">
//             <img
//               src=" ${composer.portrait}"
             
//               alt="Composer Portrait"
//               class="composer-portrait"
//             />
//             <h2 class="composer-name">${composer.name.toUpperCase()}</h2>
//             <p class="composer-fullname">${composer.complete_name}</p>
//             <p class="composer-genre">Epoch: ${composer.epoch}</p>
//             <p class="composer-birthyear">(${composer.birth.slice(0, 4)}${composer.death ? `-${composer.death.slice(0, 4)}` : ''})</p>
                      
            
//             <a href="composer.html"
//               ><button class="read-more">Read More</button></a
//             >


//             </div>
//           <div class="music-info">

//             <button class="favorite-toggle">&#9733;</button>

//           </div>
//         </div>`;

//     });

//       // Event listeners for clicks on the music card
//   document.querySelectorAll('.music-card').forEach(card => {

//     card.addEventListener('click', () => {
//       // Find the composer object that matches the clicked card
//       const composer = composers.find(comp => comp.id === composer.id);
//       if (composer) {
//         saveComposerId(composer.id);
//         window.location.href = "composer.html";
//       }
//     });

//     function saveComposerId(composerId) {
//       localStorage.setItem('selectedComposerId', composerId);
//     }
//   });
// }


initializeAllMusicPage();
