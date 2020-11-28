PImage img;
//image variable
Pimage sorted;

function setup() {
  createCanvas(800, 800);
  img = loadImage("cityscape.jpg");
  sorted = createImage(img.width, img.height, RGB); //blank image
  sorted.loadPixels();
  // for (int i = 0; i < sorted.pixels.length; i++) {
  //   sorted.pixels[i] = img.pixels[i];
  // }
  sorted = img.get();
  sorted.loadPixels();
  //Selection sort
  for (int i = 0; i < sorted.pixels.length; i++) {
    float record = -1;
    int selectedPixel = i;
    for (int j = 0; j < sorted.pixels.length; j++)
      color pix = sorted.pixels[j];
    float b = brightness(pix);
    if (b > record) {
      selectedPixel = j;
      record = b;
    }
  }
  //swap selected pixel with i
  color temp = sorted.pixels[i];
  sorted.pixels[i] = sorted.pixels[selectedPixel];
  sorted.pixel[selectedPixel] = temp;
}
sorted.updatePixels();
}

function draw() {
  background(220);
}
