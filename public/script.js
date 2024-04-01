

mapboxgl.accessToken = "pk.eyJ1IjoibWFkaGF2LWJoYXRuYWdhciIsImEiOiJjbHF5bzh6bzIwNmdhMnFudGlmNHg4Znd6In0.JuYUQpotkbXe7EEgRHomcQ";

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [77.5039, 13.0367], // Set initial map center
  zoom: 15 // Set initial map zoom level
});

map.on('load', () =>{
  // Fetch FeatureCollection data from the API
  fetch('/places')
    .then(response => response.json())
    .then(data => {
      console.log(data[0]);
      data.forEach(featureCollection => {
        console.log(featureCollection);
        map.addSource('mongo-data', {
          type:'geojson',
          data: featureCollection
          });
        map.addLayer({
          id:'places-layer',
          type:'circle',
          source:'mongo-data',
          paint:{
            'circle-radius':8,
            'circle-color':'#FF0000'
          }
        })
          })
    .catch(err => {
      console.error('Error fetching heheheheh FeatureCollection data:', err);
    });


      })
    });





/*
      console.log(data); 
      data.forEach(feature => {
        console.log(feature.features);
        feature.features.forEach(place => {
          console.log(place);
        const const markerElement = document.createElement('div');
          markerElement.className = 'marker';

          new mapboxgl.Marker(markerElement)
            .setLngLat(place.geometry.coordinates)
            .addTo(map);

            */
