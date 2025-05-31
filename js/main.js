// Optional JavaScript interactivity
console.log("Portfolio Loaded");

function toggleDropdown() {
  const dropdown = document.getElementById("projectDropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdown = document.getElementById("projectDropdown");
    if (dropdown && dropdown.style.display === "block") {
      dropdown.style.display = "none";
    }
  }
};
