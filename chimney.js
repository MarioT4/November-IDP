// let x = [];
// let y = [];
// let r = [];

// function setup() {
//   createCanvas(400, 400);
  
//   for (let i = 0; i < 100; i = i + 1) {
//     x[i] = 210;
//     y[i] = 290;
//     r[i] = 0;
//   }
// }
  
// function draw() {
//   background(0);
//   noStroke();
//   fill(255);
//   rect(195, height, 30, -100);

//   for (let i = 0; i < 100; i = i + 1) {
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
//   }
// }