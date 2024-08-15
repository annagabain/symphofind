// for shared behavior across different parts of the symphofind app.

// display the logged in status in the navbar
document.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.getElementById("logoutButton");
  const loginButton = document.getElementById("loginButton");
  const editProfile = document.getElementById("editProfile");

  // Show login/logout button on navbar conditinally
  if (isLoggedIn()) {
    logoutButton.style.display = "inline";
    loginButton.style.display = "none";
    editProfile.style.display = "inline";
  } else {
    logoutButton.style.display = "none";
    editProfile.style.display = "none";
  }
});

function saveComposerId(composerId) {
  localStorage.setItem("selectedComposerId", composerId);
}
