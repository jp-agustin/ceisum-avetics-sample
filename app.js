const viewer = new Cesium.Viewer('cesiumContainer', {
    homeButton: false,
    timeline: false
});

/*
    createModel - function to create a model onto the map

    params:
    lat - GPS location of the model in latitude
    lon - GPS location of the model in longitude
    angle - Direction of the model facing. Default value is 0 (East)
*/
const createModel = (lat, lon, angle = 0) => {

    let position = Cesium.Cartesian3.fromDegrees(lon, lat);
    /*
        From the documentation (Transforms.headingPitchRollToFixedFrame):
        - "...Heading is the rotation from the local north direction where a positive angle is increasing eastward."

        Assumption: Front face of the model would be the longer side of the green rectangle
        At angle 0, the model will be facing East.
    */
    let heading = Cesium.Math.toRadians(angle);
    let pitch = 0;
    let roll = 0;

    let hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
    let modelMatrix = Cesium.Transforms.headingPitchRollToFixedFrame(position, hpr);

    // Adding the model defined from the model.gltf and
    // modelMatrix (defines the model's position and orientation)
    let model = viewer.scene.primitives.add(
        Cesium.Model.fromGltf({
            url: 'model.gltf',
            modelMatrix: modelMatrix,
            scale: 2.0
        })
    );

    // Will wait for the model to be rendered
    model.readyPromise.then(function(model) {
        // Zoom into the last added model
        viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(lon, lat, 300.0)}
        );
    });
}

createModel(1.292857, 103.788152);