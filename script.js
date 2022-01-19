
let song;
// let loadSound;  
let date1 = "Dec, 24 2022 24:00:00";
let date2 = "Jun, 20 2022 24:00:00";
let thing1 = "Christmas"
let thing2 = "Summer"
let countDownDate1 = new Date(date1).getTime();
let countDownDate2 = new Date(date2).getTime();
let currentDate = new Date();
let x = [];
let y = [];
let r = [];
let img = [];
let santa = [];
let startImg = 1;
let indicator = 2;




function preload() {
  //song we found
  //had to add the sound through HTML
  song = loadSound ("snow.mp3")
}
function setup() {
  createCanvas(windowWidth, windowHeight);

//  song = loadSound ("./snow.mp3")
  // song.play();
//  song.setVolume(0.5)
//  frameRate(5)
  //by tinaye
  let ys = 145
  for (let i = 0; i < 1000; i = i + 1) {
    x[i] = random(10000); // ts
    y[i] = ys/185;
    r[i] = 0;
    ys+=1;
  }
  //santa and present images
  img = loadImage('./santa2.png');
    img2 = loadImage('./presents.png');

}

function draw() {
  if (indicator == 1) {
  let p = document.getElementById('long');
  let p2 = document.getElementById('short');
  currentDate = new Date();
  let timeleft = countDownDate1 - currentDate;
 //house and trees
 background(0)
 fill("SaddleBrown")
 rect(285, 290, 30, 40)
 noStroke();
 fill("YellowGreen")
 triangle(265,300,335,300,300,260)
 triangle(265,280,335,280,300,240)
 triangle(265,260,335,260,300,220)
 fill('white')
 rect(0,330,1000,200) 
    fill('#A0522D')
  rect(105,195,20,40)
   fill('red')
  rect(30,240,100,90)
  triangle(20,240,140,240,80,190)
  fill("SaddleBrown")
  rect(60,260,40,70)
 
//snow loop
 for (let i = 0; i < 25; i++) {
   fill(255,255,255, random(755));
   ellipse(random(windowWidth),random(windowHeight), random(3));
   fill(165,82,42)
 }
  //  for (let o = 0; o < 75; o++) {

  //  }
  //JamesW
  //Countdown to christmas code
  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  frameRate(10);
  removeElements();
  p.innerHTML = days + " days " + hours + " hours " + minutes + " minutes and " + seconds + "  seconds left until " + thing1;
//Chimney smoke loop
  for (let i = 0; i < 1000; i = i + 1) {
    push();
    fill(y[i]);
    const xp = map( noise(x[i]),0,1,100,125 );
    translate(xp, y[i]);
    rotate(r[i]);
    rect(-10, -10, 20, 20);
    pop();
    y[i] -= random(0, 5);
    r[i] += random(0.03, 0.05);
    x[i] += 0.01;
    if (y[i] < 50) {
      y[i] = 185;
    }
  // } 
 
  //image(img, 200, 250);
  image(img, 400, 250, img.width * 2, img.height * 2);
  image(img2, 300, 330, img.width *1.2, img.height * 1.15);
}
}
if (indicator == 2) {
 background('DarkTurquoise')
 let p = document.getElementById('long');
  let p2 = document.getElementById('short');
  currentDate = new Date();
  let timeleft = countDownDate2 - currentDate;
noStroke();

fill('black')
  ellipse(210,175.5, 947, 93)

  fill('AntiqueWhite')
  ellipse(371.5, 407.5, 1563, 153);

 let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  frameRate(10);
  removeElements();
  p.innerHTML = days + " days " + hours + " hours " + minutes + " minutes and " + seconds + "  seconds left until " + thing2;
}


}


//   function drawchimney() {
//     for (let i = 0; i < 10; i = i + 1) {
//     push();
//     fill(y[i]);
//     translate(x[i], y[i]);
//     rotate(r[i]);
//     rect(-10, -10, 20, 20);
//     pop();
//     y[i] -= random(0, 5);
//     r[i] += random(0.03, 0.05);
//     if (y[i] < -150) {
//       y[i] = 290;
//     }
//     }
// }

// function drawhouse() {
//   fill('red')
//   triangle(30,220,70,220,50,190)
// }

function keyPressed() {
if(key === "p") {
  song.play();
}
if(key === 's') {
  song.stop();
}
if(key === '1'){
  indicator = 1
  redraw();
}
if(key === '2'){
  indicator = 2
  redraw();
}
}