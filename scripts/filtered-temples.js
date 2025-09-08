// ---------- Footer dates ----------
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// ---------- Data (12+ temples) ----------
// Images use ABSOLUTE URLs to your GitHub Pages to meet the "absolute address" requirement.
// You already have these images in /images/temples/ from your earlier assignment.
// NOTE: The three marked "placeholder image" reuse an existing photo; swap later if you add new images.

const base = "https://tensefuchs.github.io/wdd131/images/temples/";

const temples = [
  { templeName: "Salt Lake Temple",            location: "Salt Lake City, Utah, USA",   dedicated: "1893-04-06", area: 253000, imageUrl: base + "salt-lake-1893.jpg" },
  { templeName: "St. George Utah Temple",      location: "St. George, Utah, USA",       dedicated: "1877-04-06", area: 110000, imageUrl: base + "st-george-1877.jpg" },
  { templeName: "Manti Utah Temple",           location: "Manti, Utah, USA",            dedicated: "1893-05-21", area: 100000, imageUrl: base + "manti-1893.jpg" },
  { templeName: "Bern Switzerland Temple",     location: "Zollikofen, Switzerland",     dedicated: "1955-09-11", area: 35000,  imageUrl: base + "bern-switzerland-1955.jpg" },
  { templeName: "Portland Oregon Temple",      location: "Lake Oswego, Oregon, USA",    dedicated: "1989-08-19", area: 80700,  imageUrl: base + "portland-oregon-1989.jpg" },
  { templeName: "Baton Rouge Louisiana Temple",location: "Baton Rouge, Louisiana, USA", dedicated: "2000-07-16", area: 10700,  imageUrl: base + "baton-rouge-2000.jpg" },
  { templeName: "Newport Beach California Temple", location: "Newport Beach, California, USA", dedicated: "2005-08-28", area: 17600, imageUrl: base + "newport-beach-2005.jpg" },
  { templeName: "Kyiv Ukraine Temple",         location: "Kyiv, Ukraine",               dedicated: "2010-08-29", area: 21960,  imageUrl: base + "kiev-2010.jpg" },
  { templeName: "Provo City Center Temple",    location: "Provo, Utah, USA",            dedicated: "2016-03-20", area: 85000,  imageUrl: base + "provo-city-center-2016.jpg" },

  // 3+ additional temples (with placeholder images you already have)
  { templeName: "Rome Italy Temple",           location: "Rome, Italy",                 dedicated: "2019-03-10", area: 41000,  imageUrl: base + "portland-oregon-1989.jpg" }, // placeholder image
  { templeName: "San Diego California Temple", location: "San Diego, California, USA",  dedicated: "1993-04-25", area: 72000,  imageUrl: base + "newport-beach-2005.jpg" },    // placeholder image
  { templeName: "Colonia Juárez Chihuahua Temple", location: "Colonia Juárez, Mexico",  dedicated: "1999-03-06", area: 6800,   imageUrl: base + "st-george-1877.jpg" }        // placeholder image (also gives a <10k 'Small')
];

// Pre-compute year to simplify filters (avoids Date parsing edge cases)
temples.forEach(t => t.year = new Date(t.dedicated).getFullYear());

// ---------- Rendering ----------
const cards = document.getElementById("cards");

function templeCard(t){
  const prettyDate = isNaN(Date.parse(t.dedicated))
    ? t.dedicated
    : new Date(t.dedicated).toLocaleDateString(undefined, { year:'numeric', month:'long', day:'numeric' });

  return `
    <article class="card">
      <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy" width="800" height="500">
      <h2>${t.templeName}</h2>
      <p class="meta"><strong>Location:</strong> ${t.location}</p>
      <p class="meta"><strong>Dedicated:</strong> ${prettyDate}</p>
      <p class="meta"><strong>Area:</strong> ${t.area.toLocaleString()} ft²</p>
    </article>
  `;
}

function render(list){
  cards.innerHTML = list.map(templeCard).join("");
}

// ---------- Filters ----------
const links = document.querySelectorAll('nav a[data-filter]');
links.forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    links.forEach(x => x.classList.remove('active'));
    a.classList.add('active');

    const f = a.dataset.filter;
    switch (f) {
      case 'old':   render(temples.filter(t => t.year < 1900)); break;
      case 'new':   render(temples.filter(t => t.year > 2000)); break;
      case 'large': render(temples.filter(t => t.area > 90000)); break;
      case 'small': render(temples.filter(t => t.area < 10000)); break;
      default:      render(temples); // home
    }
  });
});

// Initial load: show all
render(temples);
