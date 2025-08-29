// map.js
import L from 'leaflet';

function initMap(containerId) {
  const map = L.map(containerId).setView([32.2217, -110.9265], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  return map;
}

function updateMarker(map, lat, lng) {
  L.marker([lat, lng]).addTo(map);
}
