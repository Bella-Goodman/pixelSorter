//bubble sort method
//least efficient but basic
 let img;
let sorted;
let index = 0;
let imagePixels;
//
function preload() {
   img = loadImage(`assets/pixelsort_cat - Copy.jpg`)
}

function setup() {
  //createCanvas(800, 800);
  createCanvas(img.width, img.height);
  //sorted = createImage(img.width, img.height);
//sorted = createImage(100, 100);
  sorted = img.get();
  // background(220);
image(img, 0, 0)
// imageMode(CENTER);

}


function draw() {

  sorted.loadPixels();
  for (let n = 0; n < 1; n++) { //look again
    let record = -1;
    let selectedPixel = index;
    for (let j = index; j < sorted.pixels.length; j += 4) {
      let pix = color(
        sorted.pixels[j],
        sorted.pixels[j + 1],
        sorted.pixels[j + 2],
        sorted.pixels[j + 3]
      );
      let b = brightness(pix);
      if (b > record) {
        selectedPixel = j;
        record = b;
      }
    }

    // Swap selected Pixel
    let temp = [];
    temp[0] = sorted.pixels[index];
    temp[1] = sorted.pixels[index + 1];
    temp[2] = sorted.pixels[index + 2];
    temp[3] = sorted.pixels[index + 3];
    sorted.pixels[index] = sorted.pixels[selectedPixel];
    sorted.pixels[index + 1] = sorted.pixels[selectedPixel + 1];
    sorted.pixels[index + 2] = sorted.pixels[selectedPixel + 2];
    sorted.pixels[index + 3] = sorted.pixels[selectedPixel + 3];
    sorted.pixels[selectedPixel] = temp[0];
    sorted.pixels[selectedPixel + 1] = temp[1];
    sorted.pixels[selectedPixel + 2] = temp[2];
    sorted.pixels[selectedPixel + 3] = temp[3];

    if (index < sorted.pixels.length - 1) {
      index += 4;
    }
  }

  sorted.updatePixels();

  background(0);
  image(img, 0, 0);
  image(sorted, 100, 0);

  noStroke();
  fill(255);
}


// function draw() {
//   //loadPixels();
//   sorted.loadPixels();
//   for (let i = 0; i < sorted.width - 1; i++) {
//     for (let j = 0; j < sorted.height - 1; j++) {
//       let currentPixel = sorted.get(i, j);
//       let nextPixel = sorted.get(i+1, j);
//
//       let currentColor = color(currentPixel[0], currentPixel[1], currentPixel[2], currentPixel[3]);
//       let nextColor = color(nextPixel[0], nextPixel[1], nextPixel[2], nextPixel[3]);
//
//       if (hue(nextColor) > hue(currentColor)) {
//         sorted.set(i, j, nextColor);
//         sorted.set(i+1, j, currentColor);
//       }
//     }
//   }
//
//   sorted.updatePixels();
//
//   background(0);
//   image(img, 0, 0, 144, 144);
//   image(sorted, 144, 0, 144, 144);
// }
