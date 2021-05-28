noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

   

function setup(){
 canvas=createCanvas(550, 500);
 canvas.position(700, 150);

 video=createCapture(VIDEO);
 video.size(550, 550);
 video.position(50, 100);

 poseNet=ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);

 
}

function draw(){
    background("#03fcd3");
    fill("#fcba03");
    textSize(difference);
    text(word, noseX, noseY)
    
    document.getElementById("square_sides").innerHTML="Size of font = "+difference+"px";
    
}

function modelLoaded(){
    console.log("poseNet is initialaized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+" noseY= "+noseY);

        word=document.getElementById("word").value;    

        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
        difference=Math.floor(leftWristX-rightWristX);
        console.log("Left Wrist X = "+leftWristX+ "Right Wrist X = "+rightWristX+ "Difference = "+difference);

    }
}

