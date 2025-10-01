// Footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// ------------------------------
// Product array (id = option value, name = display)
// ------------------------------
const products = [
  { id: "jc-avocado",        name: "Amuseables Avocado" },
  { id: "jc-mitten",         name: "Amuseables Mitten" },
  { id: "jc-hot-choc",       name: "Amuseables Hot Chocolate with Marshmallows" },
  { id: "jc-gingerbread",    name: "Amuseables Gingerbread House" },
  { id: "jc-snowflake",      name: "Amuseables Snowflake" },
  { id: "jc-letter-santa",   name: "Amuseables Letter To Santa" },
  { id: "jc-tree-cookie",    name: "Amuseables Tree Cookie" },
  { id: "jc-star-cookie",    name: "Amuseables Star Cookie" },
  { id: "jc-silver-star",    name: "Amuseables Silver Star" },
];

// Populate the <select> options dynamically
const selectEl = document.getElementById("product");
if (selectEl) {
  products.forEach(p => {
    const opt = document.createElement("option");
    opt.value = p.id;         // value uses id (stable identifier)
    opt.textContent = p.name; // visible label uses name
    selectEl.appendChild(opt);
  });
}

// FYI for the rubric question:
// Radio buttons in one rating group share the SAME 'name' so only one can be selected.
