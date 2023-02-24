const darkModeBtn = document.querySelector("#switch");
const themeLink = document.querySelector("#theme-link");

let isDarkMode = localStorage.getItem("dark-mode") === "true" || getCookie("dark-mode") === "true" || false;
updateDarkMode(); // call this to update the theme based on the dark-mode cookie value

darkModeBtn.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  updateDarkMode();
});

function updateDarkMode() {
  if (isDarkMode) {
    themeLink.href = "dark-mode.css";
    darkModeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    themeLink.href = "light-mode.css";
    darkModeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
  setCookie("dark-mode", isDarkMode);
  localStorage.setItem("dark-mode", isDarkMode);
}

function setCookie(name, value) {
  const date = new Date();
  date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
  const expires = "; expires=" + date.toUTCString();
  document.cookie = name + "=" + (value ? "true" : "false") + expires + "; path=/";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length).includes("true");
  }
  return false;
}
