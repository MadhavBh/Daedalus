const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const GeoJSONModel = require('./models/Place');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;


app.use(bodyParser.json());
app.use(cors());

app.use(express.static("public"));

mongoose.connect("mongodb+srv://madhavbhatnagar:root@cluster0.c1chhiw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// API endpoint to fetch GeoJSON data
app.get('/places', async (req, res) => {
  try {
    const conditions = req.query;
    const places = await GeoJSONModel.findOne(conditions);
    res.json(places);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


app.post('/places', async (req, res) => {
  try {
    const geojsonData = req.body;
    console.log('Received GeoJSON data:', req.body);
    const newPlace = new GeoJSONModel(geojsonData);
    const savedPlace = await newPlace.save();
    res.status(201).json(savedPlace);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/places/admin', async(req, res)=>{
  try{
    const geojsonreq = req.body;
    console.log('received Merge request: ', req.body);
  }catch(err){
    res.status(500).json({message:'server error admin'});
  }
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/mergereq', (req, res) =>{ 
  console.log('hello');
  res.sendFile(path.join(__dirname, './adminadd/index.html'));
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

