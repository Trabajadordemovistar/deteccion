 sound = "";

leftwristX = 0;

leftwristY = 0;

puntajemuñecaizquierda = 0;

wristRx = 0;

wristLy = 0;

wristder = 0;

function preload(){
sound = loadSound("hola.mp3");


}




function setup(){
canvas = createCanvas(600,500)
canvas.center()
camera = createCapture(VIDEO)
camera.hide()



//importar modelo
marruecosganoespana = ml5.poseNet(camera,modelosirve)
//executar modelo
marruecosganoespana.on("pose",gotposes)
}
function modelosirve(){
   console.log('siuuuuuu') 
}


function gotposes(result){
   if (result.length>0){
   console.log(result)
   
   puntajemuñecaizquierda = result[0].pose.keypoints[9].score;
   
   leftwristX = result[0].pose.leftWrist.x;
   
   leftwristY = result[0].pose.leftWrist.y;
   
   wristRx = result[0].pose.rightWrist.x;
   
   wristLy = result[0].pose.rightWrist.y;
   console.log("revisando muñeca derecha en y" + wristLy)
   wristder =result[0].pose.keypoints[10].score;
   
   
   
   
   
   
   }
   
   
   }
function draw(){
    image(camera,0,0,600,500)
   fill("red");
   stroke("blue")
if (wristder > 0.2){
   circle(wristRx,wristLy,20);
   if (wristLy > 0 && wristLy <= 100) {
      sound.rate(0.5)
      document.getElementById ("elpepe").innerHTML = "velocidad = 0.5"; 

   }
    else if (wristLy > 100 && wristLy <= 200) {
      sound.rate(1)
      document.getElementById ("elpepe").innerHTML = "velocidad = 1"; 

   } 
   else if (wristLy > 200 && wristLy <= 300) {
      sound.rate(1.5)
      document.getElementById ("elpepe").innerHTML = "velocidad = 1.5"; 

   } 
   else if (wristLy > 300 && wristLy <= 400) {
      sound.rate(2)
      document.getElementById ("elpepe").innerHTML = "velocidad = 2"; 

   } 
   else if (wristLy > 400 ) {
      sound.rate(2.5)
      document.getElementById ("elpepe").innerHTML = "velocidad = 2.6"; 

   } 
}


}

   if(puntajemuñecaizquierda<0.2){
    circle(leftwristX,leftwristY,20);
    nlwristY = Number(leftwristY);
    nlwristY2 = floor(nlwristY*2);
    nlwristY3 = nlwristY2/1000;
    sound.setVolume(nlwristY3);
    document.getElementById("pepe").innerHTML = "volumen ="+ nlwristY3;
   }





function play (){
sound.play();
sound.setVolume(0.2)
sound.rate(1)                 


}






