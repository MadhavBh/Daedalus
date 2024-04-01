const fetch = require('node-fetch');
  mapboxgl.accessToken = 'pk.eyJ1IjoibWFkaGF2LWJoYXRuYWdhciIsImEiOiJjbHF5bzh6bzIwNmdhMnFudGlmNHg4Znd6In0.JuYUQpotkbXe7EEgRHomcQ';
const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [77.5039, 13.0367],
      zoom: 15 
});
const coordinates = document.getElementById('coordinates');
const marker = new mapboxgl.Marker({
      draggable: true
  })
      .setLngLat([77.5039, 13.0367])
      .addTo(map);

function onDragEnd() {
    const lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
}
function sendMergeReq(){
  const lngLat = marker.getLngLat();
  fetch('localhost:3000/places/admin', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: json.stringify(lngLat)
  });
}
  marker.on('dragend', onDragEnd);
