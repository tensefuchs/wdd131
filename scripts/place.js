// Footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// ----- Weather (static values for now) -----
const tempC = 9;        // °C (edit to match what you display)
const windKmh = 15;     // km/h

// Write the static numbers into the page (keep UI + JS in sync)
document.getElementById("temp").textContent = tempC;
document.getElementById("wind").textContent = windKmh;

// Wind chill (Celsius) formula:
// 13.12 + 0.6215T − 11.37v^0.16 + 0.3965T*v^0.16
// Valid only when T ≤ 10°C and v > 4.8 km/h
function calculateWindChillC(T, v) {
  return Math.round( (13.12 + 0.6215*T - 11.37*Math.pow(v,0.16) + 0.3965*T*Math.pow(v,0.16)) );
}

const chillEl = document.getElementById("windchill");
if (tempC <= 10 && windKmh > 4.8) {
  chillEl.textContent = calculateWindChillC(tempC, windKmh) + " °C";
} else {
  chillEl.textContent = "N/A";
}
