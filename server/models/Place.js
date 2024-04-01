
const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    default: 'Point',
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

const featureSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Feature'],
    default: 'Feature',
    required: true
  },
  properties: {
    name:{
      type: String,
      default: 'Location',
      required:false
    },
    description:{
      type: String,
      default: 'lorem ipsum ',
      required:false
    }
  },
  geometry: {
    type: pointSchema,
    required: true
  }
});

const featureCollectionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['FeatureCollection'],
    default: 'FeatureCollection',
    required: true
  },
  features: {
    type: [featureSchema],
    required: true
  },
  id: {
    type: Number,
    required: true
  }
});

const GeoJSONModel = mongoose.model('GeoJSONModel', featureCollectionSchema);

module.exports = GeoJSONModel;

