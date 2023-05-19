// for menu icon
const menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("close");
});

window.onload = function () {
  if (!window.location.hash) {
    window.location = window.location + "#loaded";
    window.location.reload();
  }
};
