async function fetchEssentialComposers() {
  try {
    const url = "https://api.openopus.org/composer/list/rec.json";
    const response = await fetch(url);

    const data = await response.json();

    //   console.log("Composer with index 2:", data.composers[2]);

    //   console.log("essentialComposersData", data.composers);

    return data.composers;
  } catch (error) {
    console.error("Error fetching essential composers:", error);
  }
}

fetchEssentialComposers();


// async function fetchComposerWorks(composerId) {
//     try {
//       const url = `https://api.openopus.org/work/list/composer/${composerId}/all.json`;
//       const response = await fetch(url);
//       const data = await response.json();
//       return data.works;
//     } catch (error) {
//       console.error("Error fetching composer works:", error);
//       return []; // Return an empty array in case of error
//     }
//   }

//   fetchComposerWorks(composerId)
