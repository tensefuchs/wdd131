// Footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Parse query string
const params = new URLSearchParams(window.location.search);

// Helper: safe text
const setText = (id, value) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = value ?? "—";
};

// Show submitted values
setText("s-product", params.get("product"));   // this is the product id
setText("s-rating", params.get("rating"));
setText("s-install", params.get("install"));

// Features may appear multiple times: ?features=...&features=...
const features = params.getAll("features");
setText("s-features", features.length ? features.join(", ") : "None selected");

setText("s-review", params.get("review"));
setText("s-username", params.get("username"));

// LocalStorage review counter
const KEY = "reviewCount";
const current = Number(localStorage.getItem(KEY) || "0") + 1;
localStorage.setItem(KEY, String(current));
document.getElementById("counter").textContent = current;
