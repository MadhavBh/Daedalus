mapboxgl.accessToken = "pk.eyJ1IjoibWFkaGF2LWJoYXRuYWdhciIsImEiOiJjbHF5bzh6bzIwNmdhMnFudGlmNHg4Znd6In0.JuYUQpotkbXe7EEgRHomcQ";

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [77.5039, 13.0367],
  zoom: 15 
});
markers = [];
const popup = new mapboxgl.Popup({ offset: [0, -15], closeButton:false, closeOnClick:false, anchor:'bottom'});
/*
map.on('click', (event) =>{
  const features = map.queryRenderedFeatures(event.point, {
    layers:['markers-layer']
  })
  console.log(features);


  if(!features.length){
    console.log("nothing found at click");
    return;
  }
  const feature = features[0];
  console.log('clicked feature:', feature);

  const popup = new mapboxgl.Popup({offset: [0,-15]})
    .setLngLat(feature.geometry.coordinates)
    .setHTML(
    `<h3>${feature.properties.name}</h3>`
  )
    .addTo(map);
})
*/
function fetchCollection(id){
  if(popup.isOpen()){
    popup.remove();
  }
  const conditions = {
    type:"FeatureCollection", "id" : id
  }
  const queryParam = new URLSearchParams(conditions);
  const queryString = queryParam.toString();
  console.log(queryString);

  fetch(`/places?${queryString}`)
    .then(response => response.json())
    .then(data =>{
      console.log(data, id);
      plot(data, id);

    })
    .catch(err =>{
      console.error("error fetching new data:", err);
    });
}


function plot(dataCollection, Id){
  data = dataCollection.features;
  console.log(data);
  reload();

  data.forEach(feature =>{
    const markerElement = document.createElement('div');
    markerElement.className = 'marker';
    const imgElement = document.createElement('img');
    imgElement.style.width = '40px';
    imgElement.style.height = '40px';
    markerElement.appendChild(imgElement);
    if(Id == 1){
      imgElement.src =  './yellow.png';
    }
    else if(Id == 2){
      imgElement.src = './blue.png';
    }
    else if(Id == 3){
      imgElement.src = './red.png';
    } 
    else if(Id == 4){
      imgElement.src = './black.png';
    }
    const marker = new mapboxgl.Marker(markerElement)
      .setLngLat(feature.geometry.coordinates)
      .addTo(map)

    markers.push(marker);

    markerElement.addEventListener('click', () => {
      console.log(feature);
      popup.setLngLat(feature.geometry.coordinates);
      popup.setHTML(`<div id="popup-content" class="popup-content">
            <h1 id="popup-title" class="popup-title">${feature.properties.name}</h1>
            <p id="popup-description" class="popup-description">${feature.properties.description}</p>
            <button id="popup-button" class="popup-button">Learn More</button>
        </div>`);
      if(popup.isOpen()){
        popup.remove();
      }
      popup.addTo(map);
   
      console.log(feature.properties.name);


      map.on('click', ()=>{
        console.log('popup click works');

      })

    markerElement.addEventListener('click', (e) => {
      console.log(e);
      const fixedPoint = [77.50462, 13.0362]; 
      const markerCoordinates = feature.geometry.coordinates.slice();
      getDirections(fixedPoint, markerCoordinates);
    });
      });
  }
    );
    
    
  const geojsonSource = {
    type: 'FeatureCollection',
    features:data.map(feature =>({
      type: 'Feature',
      geometry: feature.geometry,
      properties:{
        id:feature.id,
        icon: Id ===1 ? './red.png': '../blue.png'
      }
    }))
  }

  map.addSource('markers', {
    type: 'geojson',
    data:geojsonSource
  });

  map.addLayer({
    id:'markers-layer',
    type:'symbol',
    source: 'markers',
    layout: {
      'icon-image':'{icon}',
      'icon-size':0.8,
      'icon-allow-overlap':true
    }
  });
}

//Routes
  function getDirections(fixedPoint, markerCoordinates) {
    const origin = fixedPoint;
    const destination = markerCoordinates;
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${origin[0]},${origin[1]};${destination[0]},${destination[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const route = data.routes[0].geometry.coordinates;
          if (map.getSource('route')) {
            map.removeLayer('route');
            map.removeSource('route');
        }
        const route_layer={
          id: 'route',
          type: 'line',
          source: {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'LineString',
                coordinates: route
              }
            }
          },
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#3887be',
            'line-width': 8
          }
        };
        map.addLayer(route_layer);
 
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }

function reload(){
  markers.forEach(marker => marker.remove());
  markers.length = 0;

}

function poptest(){
  map.setStyle('mapbox://styles/mapbox/dark-v11');

}


//general functions for animations
const button = document.getElementById('merge-butt');
button.addEventListener('click', function () {
  fetch('/mergereq')
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(function (html) {
      // Display the fetched HTML content in a new window/tab
      const newWindow = window.open();
      newWindow.document.write(html);
    })
    .catch(function (err) {
      console.error('Error fetching /mergereq:', err);
    });
});


const themeSwitch = document.getElementById('theme-checkbox');

  themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
      map.setStyle('mapbox://styles/mapbox/dark-v10');
    } else {
      map.setStyle('mapbox://styles/mapbox/light-v10');
    }
  });

window.addEventListener('scroll', function() {
    var navContainer = document.querySelector('.nav-container');
    if (window.scrollY > 50) {
      navContainer.classList.add('sticky-nav');
    } else {
      navContainer.classList.remove('sticky-nav');
    }
  });
