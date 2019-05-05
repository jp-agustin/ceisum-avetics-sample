# Cesium - Avetics

Submitted by: John Patrick Agustin
Prerequisites: Node.js, NPM

A sample web application that will place a gltf building model onto an empty space given the following parameters:
* GPS location of the model in Latitude and Longitude
* Direction of the model facing (In angle)

### Instructions

* Run the following to install the dependencies:
`npm install`

* To run the server locally:
`node server.js`

* Open the sample web application using the following url: *http://localhost:8080/*

### Other Notes

* To create a new model, inside the *app.js*, call the createModel function with latitude, longitude and optional direction (angle) as parameters.