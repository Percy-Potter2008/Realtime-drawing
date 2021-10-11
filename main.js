noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);
  
  canvas = createCanvas(550, 500);
  canvas.position(560, 150);
  
  poseNet= ml5.posenet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function modelLoaded() {
  console.log('PoseNet is intialized!');
}
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log('results');
    
     leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    
    console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
  }
}
function draw() {
  background('#969A97');
  
  document.getElementById("squareSide").innerHTML = "Width and height of a square will be = " + difference + "px";
  fill('#F90093');
  stroke('#F90093');
  square(noseX, noseY, difference);
}
