/* Footer dates */
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

/* Hamburger toggle */
const menuButton = document.getElementById("menuButton");
const primaryNav  = document.getElementById("primaryNav");

menuButton.addEventListener("click", () => {
  const isOpen = primaryNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "✕" : "☰";
});

/* Simple filtering for Home / Old / New / Large / Small */
const gallery = document.getElementById("gallery");
const links = document.querySelectorAll('nav a[data-filter]');

function applyFilter(filter){
  const cards = gallery.querySelectorAll('figure');
  cards.forEach(card => {
    const year = Number(card.dataset.year);
    const size = card.dataset.size; // "large" or "small"
    let show = true;

    switch(filter){
      case "old":   show = year < 1900; break;
      case "new":   show = year >= 1900; break;
      case "large": show = size === "large"; break;
      case "small": show = size === "small"; break;
      default:      show = true; // home = all
    }
    card.style.display = show ? "" : "none";
  });
}

links.forEach(a => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = a.dataset.filter;
    applyFilter(filter);
    // close the menu on mobile after a selection
    if (getComputedStyle(menuButton).display !== "none") {
      primaryNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded","false");
      menuButton.textContent = "☰";
    }
  });
});
