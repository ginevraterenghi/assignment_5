var myImage;
var song;
var amp;
var pianta;

function preload(){
  myImage= loadImage ('./image/radio1.png');
  pianta= loadImage ('./image/pianta.png');
  song= loadSound ('./sound/jazzcomedy.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  song.loop();
  amp=new p5.Amplitude;
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);
  var vol= amp.getLevel();
  var dim= map(vol,0,1,width/10,width/2);
    
  //piastrelle
  push();
  for(var x=0; x<width; x=x+width/20){
  strokeWeight(width/500);
  stroke(0,0,0);
  line(x,0,x,height);
  }
  pop();
  
  push();
  for(var y=0; y<height; y=y+width/20){
  strokeWeight(width/500);
  stroke(0,0,0);
  line(0,y,width,y);
  }
  pop();
  
  //pianta
  var grandezza=0;
  
  if(width>height ){
    grandezza=height/2;
  }
  else{
    grandezza=width/2;
  }
  image(pianta,width/-5,height/7,grandezza, grandezza);
 
  //tavolo pieno
  push();
  beginShape();
  noStroke();
  fill(255,255,255);
  vertex(0, height/2);
  vertex(width/1.3, height/2);
  vertex(width, height);
  vertex(0, height/1);
  endShape(CLOSE);
  pop();
  
  //tavolo
  strokeWeight(width/200);
  stroke(0,0,0);  
  line(0,height/2,width/1.3,height/2);
  
  strokeWeight(width/200);
  stroke(0,0,0);  
  line(width/1.3,height/2,width,height/1);
  
  //radio
  image(myImage, 7.5*width/27,height/2.5,dim+width/2.1,dim+height/3);

  //aqua
  //h12
  strokeWeight(width/40);
  stroke(52,255,196);
  line(15*width/27,8*height/20,15*width/27,(8*height/20)-dim);
  
  //h7
  strokeWeight(width/50);
  stroke(52,255,196);
  line(1*width/3,6*height/7,(1*width/3-10)-dim/3,(6*height/7+10)+dim/3);
  
  //h9
  strokeWeight(width/40);
  stroke(52,255,196);
  line(1*width/4,7.5*height/11,(1*width/4)-dim/2,7.5*height/11);
  
  //h11
  strokeWeight(width/50);
  stroke(52,255,196);
  line(1*width/3,height/2,(1*width/3)-dim/3,(height/2)-dim/3);
  
  //h1
  strokeWeight(width/50);
  stroke(52,255,196);
  line(21*width/27,height/2,(21*width/27)+dim/3,(height/2)-dim/3);

  //h3
  strokeWeight(width/40);
  stroke(52,255,196);
  line(18*width/22,7.5*height/11,(18*width/22)+dim/2, 7.5*height/11); 

  //h5
  strokeWeight(width/50);
  stroke(52,255,196);
  line(21*width/27,6*height/7,(21*width/27)+dim/3,(6*height/7+10)+dim/3);
   
  //clock
  push();
  stroke(0,0,0);
  strokeWeight(width/200);
  ellipse(4*width/5,4*height/20,1*width/7);
  pop();
  
  translate(4*width/5,4*height/20);
  rotate(-90);

  var h = hour();
  var m = minute();
  var s = second();

  var secondAngle = map(s, 0, 60, 0, 360);
  var minuteAngle = map(m, 0, 60, 0, 360);
  var hourAngle = map(h % 12, 0, 12, 0, 360);

  //seconds
  push();
   strokeWeight(width/500);
   rotate(secondAngle);
   stroke(0,0,0);
   line(0, 0, width/20, 0);
  pop();

  //minutes
  push();
   strokeWeight(width/300);
   rotate(minuteAngle);
   stroke(0,0,0);
   line(0, 0, width/25, 0);
  pop();

  //hours
  push();
   strokeWeight(width/200);
   rotate(hourAngle);
   stroke(0,0,0);
   line(0, 0, width/30, 0);
  pop();

} 
  
function windowResized(){
resizeCanvas(windowWidth, windowHeight);  
  
}