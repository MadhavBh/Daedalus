const fetch = require('node-fetch');
//import fetch from 'node-fetch';
// Example GeoJSON data
const food ={
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name":"Vora uncle ki Dairy",
        "description":"Get fresh Dahi and Paneer from vora uncle ka milk"
      
      },
      "geometry": {
        "coordinates": [
          77.4987378566197,
          13.034578953740535
        ],
        "type": "Point"
      }
      },
    
    {
      "type": "Feature",
      "properties": {
        "name": "Wave",
        "description": "wave"
      },
      "geometry": {
        "coordinates": [
          77.50394786861233,
          13.036316126285683
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Fit Pizza",
        "description": "delicious Pizza parlour, innovative new pizza toppings at good prices!"
      },
      "geometry": {
        "coordinates": [
          77.50330352542915,
          13.036411458320941
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Rolls and Momos",
        "description": "Famously known as RoMo, is the best hangout spot for momo Date or amazing egg rolls!"
      },
      "geometry": {
        "coordinates": [
          77.50370228620108,
          13.036227716068197
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Tea-Day",
        "description": "Best lemon tea in town!"
      },
      "geometry": {
        "coordinates": [
          77.50417589936285,
          13.0359533714133
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name":"Meat Shop",
        "description":"best cut all types of meat"      },
      "geometry": {
        "coordinates": [
          77.50444657436213,
          13.038387327838805
        ],
        "type": "Point"
      }
    }
  ],
  "id": 1
}

utility = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Castrol bike point",
        "description": "Affordable and sophisticated place for repairs and maintanance"
      },
      "geometry": {
        "coordinates": [
          77.5042834291877,
          13.03678789385819
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "SLV Aquarium",
        "description": "Buy homely pets and fish!"
      },
      "geometry": {
        "coordinates": [
          77.504380597296,
          13.037688531247383
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "SLN Bike Point",
        "description": "Get your punctures and dents fixed here!"
      },
      "geometry": {
        "coordinates": [
          77.50438439962926,
          13.037795956394362
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "VIP builders and construction",
        "description": "best constructor contractors in town!"
      },
      "geometry": {
        "coordinates": [
          77.50270102785561,
          13.037173109370514
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name":"Fast Tours and Travels",
        "description":"plan your next vacation here!"
      
      },
      "geometry": {
        "coordinates": [
          77.50266917088601,
          13.038753409126826
        ],
        "type": "Point"
      }
    },
 {
      "type": "Feature",
      "properties": {
        "name": "Hugh Jass Car shop",
        "description": "get second hand cars from Hugh Jass"
      },
      "geometry": {
        "coordinates": [
          77.49644367044255,
          13.038705210657682
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Keith Khweaf medicos"
      },
      "geometry": {
        "coordinates": [
          77.50939258665284,
          13.041133652613823
        ],
        "type": "Point"
      }
    },

  ],
  "id":2
}

shopping = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Rakshita Small Baby Shop",
        "description": "get all babies here"
      },
      "geometry": {
        "coordinates": [
          77.50462773843981,
          13.038855645807544
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "ESI Dispensary",
        "description": "dispend all of your needs"
      },
      "geometry": {
        "coordinates": [
          77.50628219962448,
          13.043261206062624
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name":"Bhanushah steel shop",
        "description":"Buy best steel from bhanushah"
      },
      "geometry": {
        "coordinates": [
          77.50312769363143,
          13.031398250412508
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Sapna Super Market",
        "description": "super market for all of your super needs!"
      },
      "geometry": {
        "coordinates": [
          77.5019672201089,
          13.033909531755825
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "vishal Mega mart",
        "description": "get all of your needs satisfied at an amazing price!!"
      },
      "geometry": {
        "coordinates": [
          77.50389027425848,
          13.033517591425891
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Stat Stationary",
        "description": "get all your college supplies!"
      },
      "geometry": {
        "coordinates": [
          77.50360164590961,
          13.036658587344618
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Sadhana Meer Clothing store",
        "description": "get trendy clothes and accessories!"
      },
      "geometry": {
        "coordinates": [
          77.50321362996795,
          13.036694902730702
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name":"HMS furnitures!",
        "description":"get cheap and quality furniture delivered to your home today!"
      
      },
      "geometry": {
        "coordinates": [
          77.50471005076065,
          13.038579144198053
        ],
        "type": "Point"
      }
    }
  ],
  "id":3
}

stays = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "dhruva Bliss",
        "description": "luxury Flats for students and families"
      },
      "geometry": {
        "coordinates": [
          77.50430838755346,
          13.037217493390301
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Dhruva Coral",
        "description": "built specially for students for comfort and ease"
      },
      "geometry": {
        "coordinates": [
          77.50429257143185,
          13.0370017751044
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Star 555",
        "description": "Luxury PGs for college students with good food"
      },
      "geometry": {
        "coordinates": [
          77.50444282442726,
          13.038294845611162
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "MR Ladies PG",
        "description": "safe and clean PG for women"
      },
      "geometry": {
        "coordinates": [
          77.50399034888386,
          13.036112950047695
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Vaishnavi PG",
        "description": "Luxury PG flats with amazing ammenitites!"
      },
      "geometry": {
        "coordinates": [
          77.50307843722175,
          13.035963926397926
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name":"Eden Homes",
        "description":"Comfortable homes, gated community, with good food!"
      
      },
      "geometry": {
        "coordinates": [
          77.50295507950358,
          13.034721125181605
        ],
        "type": "Point"
      }
    }
  ],
  "id":4
}

collections = [food, utility, shopping, stays];

collections.forEach(collection =>{

  fetch('http://localhost:3000/places', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(collection)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


})

