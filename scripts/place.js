// Footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Weather values displayed (edit to match your place)
const tempC = 9;        // °C
const windKmh = 15;     // km/h
document.getElementById("temp").textContent = tempC;
document.getElementById("wind").textContent = windKmh;

// One-line wind chill (C); valid when T ≤ 10°C and v > 4.8 km/h
function calculateWindChill(T, v){ return Math.round(13.12 + 0.6215*T - 11.37*Math.pow(v,0.16) + 0.3965*T*Math.pow(v,0.16)); }

const chillEl = document.getElementById("windchill");
if (tempC <= 10 && windKmh > 4.8) {
  chillEl.textContent = calculateWindChill(tempC, windKmh) + " °C";
} else {
  chillEl.textContent = "N/A";
}
