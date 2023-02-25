// function to check if cookies are accepted
/*function cookiesAccepted() {
  return document.cookie.indexOf("cookies-permission=accepted") !== -1;
}

function getCookie2(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length).includes("accepted") ? "accepted" : "declined";
  }
  return null;
}

// function to check if cookies are declined or accepted
function cookiesDeclinedorAccepted() {
  const cookiesDeclinedorAccepted2 = getCookie2("cookies-permission");
  console.log(cookiesDeclinedorAccepted2)
  const cookiesDeclinedorAccepted1 = document.getElementById("cookies-warning");
  if (cookiesDeclinedorAccepted2 === "declined") {
    cookiesDeclinedorAccepted1.style.display = "none";
    setCookie2("dark-mode", false);
    localStorage.setItem("dark-mode", false);
  } else {
    cookiesDeclinedorAccepted1.style.display = "flex";
  }
}

// function to set cookies
function setCookie2(name, value) {
  document.cookie = name + "=" + value + "; path=/";
}

// function to hide the cookies warning popup
function hideCookiesWarning() {
  document.getElementById("cookies-warning").style.display = "none";
}

// hide cookies warning popup as soon as page is loaded
window.onload = function() {
  hideCookiesWarning();
  cookiesDeclinedorAccepted();
};

// function for accept cookies button
document.getElementById("accept-cookies-btn").addEventListener("click", function() {
  setCookie2("cookies-permission", "accepted");
  hideCookiesWarning();
  cookiesDeclinedorAccepted();
});

// function for decline cookies button
document.getElementById("decline-cookies-btn").addEventListener("click", function() {
  setCookie2("cookies-permission", "declined");
  hideCookiesWarning();
  setCookie2("dark-mode", false);
  localStorage.setItem("dark-mode", false);
  cookiesDeclinedorAccepted();
});*/

const darkModeBtn = document.querySelector("#switch");
const themeLink = document.querySelector("#theme-link");

let isDarkMode = getTheme();

// function to set cookies
function setCookie(name, value) {
    const date = new Date();
    date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + (value ? "true" : "false") + expires + "; path=/";
}

updateDarkMode(); // call this to update the theme based on the dark-mode cookie value

darkModeBtn.addEventListener("click", () => {
  //if (cookiesAccepted()) {
    isDarkMode = !isDarkMode;
    updateDarkMode();
  //}
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

function getTheme() {
  const localStorageTheme = localStorage.getItem("dark-mode");
  const cookieTheme = getCookie("dark-mode");
  if (localStorageTheme !== null) {
    return localStorageTheme === "true";
  } else if (cookieTheme !== null) {
    return cookieTheme === "true";
  } else {
    return true; // default to dark mode
  }
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length).includes("true") ? "true" : "false";
  }
  return null;
}
