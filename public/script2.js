mapboxgl.accessToken = "pk.eyJ1IjoibWFkaGF2LWJoYXRuYWdhciIsImEiOiJjbHF5bzh6bzIwNmdhMnFudGlmNHg4Znd6In0.JuYUQpotkbXe7EEgRHomcQ";

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [77.5039, 13.0367], // Set initial map center
  zoom: 15 // Set initial map zoom level
});

map.on('load', () => {
  // Fetch GeoJSON data from the API
  fetch('/places')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch GeoJSON data');
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // Log the fetched data to the console

      // Iterate through each feature collection in the data
      data.forEach(featureCollection => {
        // Add each feature collection as a source to the map
        map.addSource('mongo-data', {
          type: 'geojson',
          data: featureCollection
        });

        // Add a layer for each feature collection
        map.addLayer({
          id: 'places-layer',
          type: 'symbol',
          source: 'mongo-data',
          layout: {
            'icon-image': './mapbox-icon.png'
          }
        });

      });
    })
    .catch(err => {
      console.error('Error fetching GeoJSON data:', err);
    });
});

