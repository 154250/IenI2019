function setup() {
  canvas = createCanvas(450,500);
  background('gray');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // groene cirkel zonder rand
  
  stroke('green');
  fill('white');
   strokeWeight(25);
  ellipse(225,225,425);
  

  // witte cirkel
    noStroke();
  fill('white');
   strokeWeight(25);
  ellipse(225,225,425);

  
  // witte rechthoek met rode rand
  
  stroke('green');
  fill('white');
  strokeWeight(10);
  rect(125,125,200,200);  
}
