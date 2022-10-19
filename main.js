noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWrsitX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.hide();

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#FF5C77');
    image(video, 50, 50, 450, 400);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWrsitX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWrsitX - rightWristX);
    }
}

function modelLoaded() {
    console.log('Posenet Is Initialized');
}

function draw() {
    background('w.jpg')
    fill('blue');
    stroke('blue');
    textSize(difference);
    text('KING', noseX, noseY);
}
