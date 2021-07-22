//nothing to see here. if u see H@cK$r$ will com$#
//p5.js is D#$l&t$D

function preload() {
}


function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
    }
}

function modelLoaded() {
    console.log(" your poseNet model is loaded");
}

function draw() {
    image(video,0,0,300,300);
}

function takeApic() {
    save("Mypicture.png");
}
//H@h@h@H@H@H@HH@H@H@HH@H@H@HH@H@H@Ha