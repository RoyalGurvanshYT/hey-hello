noseX = 0;
noseY= 0;
function preload()
{
    mustache_image = loadImage("https://i.postimg.cc/vZz9zd4q/m.png")
}

function setup()
{
    canvas= createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function draw()
{
    image(video,0,0,300,300);
   
    image( mustache_image, noseX, noseY,60,60);
         
}

function take_snapshot()
{
   save('myFilterimg.png')
}

function modelLoaded(){

    console.log("modelLoaded");

}
function gotPoses(results)
{
   if(results.length > 0){
         console.log(results);
         noseX = results[0].pose.nose.x - 25;
         noseY = results[0].pose.nose.y -25;
         console.log("noseX " + noseX);
         console.log("noseY " + noseY);
   }
}
