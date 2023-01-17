// Using the Leaflet library to create a map
// --------------------------------------------------

// Initialize and add the map
let map = L.map("map").setView([25, 0], 2.5);

// Add a tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Add a scale to the map
L.control.scale().addTo(map);

// Function to get the coordinates of the clicked point
const onMapClick = (e) => {
  L.popup()
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
};

// Add a click event listener to the map to run the onMapClick function
map.on("click", onMapClick);

// ─── Map Markers ─────────────────────────────────────────────────────────────

// MVNU default marker
let mvnuMarker = L.marker([40.37434803720023, -82.47153282165529]).addTo(map);
