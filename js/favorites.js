

// TESTS
// ---------------------------------------------------
// ---------------------------------------------------


// setItem("testComposerCard", "test composer card");

// test getting a composer card by key
// console.log(getItem("testComposerCard"));


// ---------------------------------------------------
// ---------------------------------------------------


function addToFavorites(composer) {
  const favorites = JSON.parse(localStorage.getItem("testComposerCard")) || [];



  if (!favorites.includes(composer)) {
    favorites.push(composer);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
}


// PLACEHOLDER
// function removeFromFavorites(composer)


// PLACEHOLDER
// check if a composer is in favorites
// function isFavorite(composer)



// TEST
// load favorite composers from localStorage
// function loadFavorites() 

// PLACEHOLDER
// Event listener for the favorite toggle buttons

// document.addEventListener("DOMContentLoaded", () => {
//   loadFavorites();
// });
