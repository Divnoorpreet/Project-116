noseX=0;
noseY=0;

function preload(){
    mustache= loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet= ml5.poseNet(video,modelLoaded);
    posenet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose y =" + noseX);
        console.log("nose x =" + noseY);
    }

}

function modelLoaded(){
    console.log("poseNet is intialized");
}

function draw(){
    image(video,0,0,300,300);
    image(mustache,noseX,noseY,60,50);
}

function take_snapshot(){
    save("myFilterImage.png");
}