//Dette er variablerne for alle sange som jeg har gjort brug af
let song1;
let song2;
let song3;
let song4;
let song5;
let song6;
let song7;
let song8;
let song9;
let song10;

//Dette er variablen for det trommebillede som jeg har brugt
let img1;
//Dette er variablerne for alle værdierne i X aksen
let x1 = 100;
let x2 = 600;
let x3 = 700;
let x4 = 800;
let x5 = 450;

//Dette er variablerne for alle værdierne i Y aksen
let y1 = 150;
let y2 = 125;
let y3 = 300;
let y4 = 350;
let y5 = 400;
let y6 = 450;
let y7 = 500;
let y8 = 550;

//Dette er variablerne for alle længderne mod X aksen
let a1 = 100;
let a2 = 450;
let a3 = 40;

//Dette er variablerne for alle længderne mod Y aksen
let b1 = 100;
let b2 = 150;
let b3 = 40;

//Dette er en funktion der kun køre 1 gang i starten
function setup() {
  //Dette er størreslen af skærmen
  createCanvas(1300, 600);
  //Dette er farven for den given figure
  fill(0);
  //Dette bestemmer om firkantens x og y position og størrelse skal tage udgangs punkt i midten eller kanten
  rectMode(CENTER);
  //Dette er en firkant
  rect(x3, y2, a2, b2);
  //Her bliver de variabler for sangende difineret
  song1 = loadSound("tromme.mp3");
  song2 = loadSound("piano1.mp3");
  song3 = loadSound("piano2.mp3");
  song4 = loadSound("piano3.mp3");
  song5 = loadSound("guitar1.mp3");
  song6 = loadSound("guitar2.mp3");
  song7 = loadSound("guitar3.mp3");
  song8 = loadSound("guitar4.mp3");
  song9 = loadSound("guitar5.mp3");
  song10 = loadSound("guitar6.mp3");
  //Her bliver variablen for billedet difineret
  img1 = loadImage("trommebillede.jpg");
}

//Dette er en funktion der skal køre kontant på en hastighed med en given fps altså billede per sekunder
function draw() {
  //Dette fortæller at den givende figur ikke skal have nogle kanter
  noStroke();
  rectMode(CENTER);
  rect(x1, y1, a1, b1);
  //Dette bestemmer om billedets x og y position og størrelse skal tage udgangs punkt i midten eller kanten
  imageMode(CENTER);
  //Her giver vi billedet en størrrelse og position
  image(img1, x1, y1, a1, b1);
  //Dette er en if statement som skal tjekker om musen er indenfor firkanten eller ej
  if (
    (mouseX > x1 - a1 / 2 && mouseY > y1 + b1 / 2) ||
    (mouseX > x1 - a1 / 2 && mouseY < y1 - b1 / 2) ||
    (mouseX < x1 + a1 / 2 && mouseY > y1 + b1 / 2) ||
    (mouseX < x1 + a1 / 2 && mouseY < y1 - b1 / 2) ||
    (mouseX > y1 - a1 / 2 && mouseX > x1 + b1 / 2) ||
    (mouseX > y1 - a1 / 2 && mouseX < x1 - b1 / 2) ||
    (mouseX < y1 + a1 / 2 && mouseX > x1 + b1 / 2) ||
    (mouseX < y1 + a1 / 2 && mouseX < x1 - b1 / 2)
  ) {
    //Og hvis musen er inden for cirklen og hvis jeg så trykker så vil der ske noget
    /*Der står "else if" istedetfor bare "if" dette er fordi at rent faktisk så tjekker min forige if
    statement ikke om musen er indenfor firkanten derimod om den er udenfor firkanten og derfor så 
    hvis jeg bare skrev if uden else så vil musen reagere når jeg trykker udenfor firkanten
    */
  } else if (mouseIsPressed) {
    //Det der sker er at en sang vil blive spillet
    song1.play();
  }
  //Resten er rent faktisk bare gentagelser:
  stroke(1);
  fill(255);
  rect(x2, y1, a1, b1);
  fill(255);
  rectMode(CENTER);
  if (
    (mouseX > x2 - a1 / 2 && mouseY > y1 + b1 / 2) ||
    (mouseX > x2 - a1 / 2 && mouseY < y1 - b1 / 2) ||
    (mouseX < x2 + a1 / 2 && mouseY > y1 + b1 / 2) ||
    (mouseX < x2 + a1 / 2 && mouseY < y1 - b1 / 2) ||
    (mouseX > y1 - a1 / 2 && mouseX > x2 + b1 / 2) ||
    (mouseX > y1 - a1 / 2 && mouseX < x2 - b1 / 2) ||
    (mouseX < y1 + a1 / 2 && mouseX > x2 + b1 / 2) ||
    (mouseX < y1 + a1 / 2 && mouseX < x2 - b1 / 2)
  ) {
  } else if (mouseIsPressed) {
    song2.play();
  }
  stroke(1);
  rect(x3, y1, a1, b1);
  rectMode(CENTER);
  if (
    (mouseX > x3 - a1 / 2 && mouseY > y1 + b1 / 2) ||
    (mouseX > x3 - a1 / 2 && mouseY < y1 - b1 / 2) ||
    (mouseX < x3 + a1 / 2 && mouseY > y1 + b1 / 2) ||
    (mouseX < x3 + a1 / 2 && mouseY < y1 - b1 / 2) ||
    (mouseX > y1 - a1 / 2 && mouseX > x3 + b1 / 2) ||
    (mouseX > y1 - a1 / 2 && mouseX < x3 - b1 / 2) ||
    (mouseX < y1 + a1 / 2 && mouseX > x3 + b1 / 2) ||
    (mouseX < y1 + a1 / 2 && mouseX < x3 - b1 / 2)
  ) {
  } else if (mouseIsPressed) {
    song3.play();
  }
  stroke(1);
  rect(x4, y1, a1, b1);
  rectMode(CENTER);
  if (
    (mouseX > x4 - a1 / 2 && mouseY > y1 + b1 / 2) ||
    (mouseX > x4 - a1 / 2 && mouseY < y1 - b1 / 2) ||
    (mouseX < x4 + a1 / 2 && mouseY > y1 + b1 / 2) ||
    (mouseX < x4 + a1 / 2 && mouseY < y1 - b1 / 2) ||
    (mouseX > y1 - a1 / 2 && mouseX > x4 + b1 / 2) ||
    (mouseX > y1 - a1 / 2 && mouseX < x4 - b1 / 2) ||
    (mouseX < y1 + a1 / 2 && mouseX > x4 + b1 / 2) ||
    (mouseX < y1 + a1 / 2 && mouseX < x4 - b1 / 2)
  ) {
  } else if (mouseIsPressed) {
    song4.play();
  }
  noStroke();
  fill(100, 100, 100);
  rect(x5, y3, a3, b3);
  rectMode(CENTER);
  if (
    (mouseX > x5 - a3 / 2 && mouseY > y3 + b3 / 2) ||
    (mouseX > x5 - a3 / 2 && mouseY < y3 - b3 / 2) ||
    (mouseX < x5 + a3 / 2 && mouseY > y3 + b3 / 2) ||
    (mouseX < x5 + a3 / 2 && mouseY < y3 - b3 / 2) ||
    (mouseX > y3 - a3 / 2 && mouseX > x5 + b3 / 2) ||
    (mouseX > y3 - a3 / 2 && mouseX < x5 - b3 / 2) ||
    (mouseX < y3 + a3 / 2 && mouseX > x5 + b3 / 2) ||
    (mouseX < y3 + a3 / 2 && mouseX < x5 - b3 / 2)
  ) {
  } else if (mouseIsPressed) {
    song5.play();
  }
  noStroke();
  fill(100, 100, 100);
  rect(x5, y4, a3, b3);
  rectMode(CENTER);
  if (
    (mouseX > x5 - a3 / 2 && mouseY > y4 + b3 / 2) ||
    (mouseX > x5 - a3 / 2 && mouseY < y4 - b3 / 2) ||
    (mouseX < x5 + a3 / 2 && mouseY > y4 + b3 / 2) ||
    (mouseX < x5 + a3 / 2 && mouseY < y4 - b3 / 2) ||
    (mouseX > y4 - a3 / 2 && mouseX > x5 + b3 / 2) ||
    (mouseX > y4 - a3 / 2 && mouseX < x5 - b3 / 2) ||
    (mouseX < y4 + a3 / 2 && mouseX > x5 + b3 / 2) ||
    (mouseX < y4 + a3 / 2 && mouseX < x5 - b3 / 2)
  ) {
  } else if (mouseIsPressed) {
    song6.play();
  }
  noStroke();
  fill(100, 100, 100);
  rect(x5, y5, a3, b3);
  rectMode(CENTER);
  if (
    (mouseX > x5 - a3 / 2 && mouseY > y5 + b3 / 2) ||
    (mouseX > x5 - a3 / 2 && mouseY < y5 - b3 / 2) ||
    (mouseX < x5 + a3 / 2 && mouseY > y5 + b3 / 2) ||
    (mouseX < x5 + a3 / 2 && mouseY < y5 - b3 / 2) ||
    (mouseX > y5 - a3 / 2 && mouseX > x5 + b3 / 2) ||
    (mouseX > y5 - a3 / 2 && mouseX < x5 - b3 / 2) ||
    (mouseX < y5 + a3 / 2 && mouseX > x5 + b3 / 2) ||
    (mouseX < y5 + a3 / 2 && mouseX < x5 - b3 / 2)
  ) {
  } else if (mouseIsPressed) {
    song7.play();
  }
  noStroke();
  fill(100, 100, 100);
  rect(x5, y6, a3, b3);
  rectMode(CENTER);
  if (
    (mouseX > x5 - a3 / 2 && mouseY > y6 + b3 / 2) ||
    (mouseX > x5 - a3 / 2 && mouseY < y6 - b3 / 2) ||
    (mouseX < x5 + a3 / 2 && mouseY > y6 + b3 / 2) ||
    (mouseX < x5 + a3 / 2 && mouseY < y6 - b3 / 2) ||
    (mouseX > y6 - a3 / 2 && mouseX > x5 + b3 / 2) ||
    (mouseX > y6 - a3 / 2 && mouseX < x5 - b3 / 2) ||
    (mouseX < y6 + a3 / 2 && mouseX > x5 + b3 / 2) ||
    (mouseX < y6 + a3 / 2 && mouseX < x5 - b3 / 2)
  ) {
  } else if (mouseIsPressed) {
    song8.play();
  }
  noStroke();
  fill(100, 100, 100);
  rect(x5, y7, a3, b3);
  rectMode(CENTER);
  if (
    (mouseX > x5 - a3 / 2 && mouseY > y7 + b3 / 2) ||
    (mouseX > x5 - a3 / 2 && mouseY < y7 - b3 / 2) ||
    (mouseX < x5 + a3 / 2 && mouseY > y7 + b3 / 2) ||
    (mouseX < x5 + a3 / 2 && mouseY < y7 - b3 / 2) ||
    (mouseX > y7 - a3 / 2 && mouseX > x5 + b3 / 2) ||
    (mouseX > y7 - a3 / 2 && mouseX < x5 - b3 / 2) ||
    (mouseX < y7 + a3 / 2 && mouseX > x5 + b3 / 2) ||
    (mouseX < y7 + a3 / 2 && mouseX < x5 - b3 / 2)
  ) {
  } else if (mouseIsPressed) {
    song9.play();
  }
  noStroke();
  fill(100, 100, 100);
  rect(x5, y8, a3, b3);
  rectMode(CENTER);
  if (
    (mouseX > x5 - a3 / 2 && mouseY > y8 + b3 / 2) ||
    (mouseX > x5 - a3 / 2 && mouseY < y8 - b3 / 2) ||
    (mouseX < x5 + a3 / 2 && mouseY > y8 + b3 / 2) ||
    (mouseX < x5 + a3 / 2 && mouseY < y8 - b3 / 2) ||
    (mouseX > y8 - a3 / 2 && mouseX > x5 + b3 / 2) ||
    (mouseX > y8 - a3 / 2 && mouseX < x5 - b3 / 2) ||
    (mouseX < y8 + a3 / 2 && mouseX > x5 + b3 / 2) ||
    (mouseX < y8 + a3 / 2 && mouseX < x5 - b3 / 2)
  ) {
  } else if (mouseIsPressed) {
    song10.play();
  }
}
