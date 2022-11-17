function setup(){
  createCanvas(800, 800, WEBGL);
  colorMode(HSB);
  angleMode(DEGREES);
  stroke(205, 50, 100);
  strokeWeight(4);
}

function draw(){
  //background(230, 50, 15);
  clear();
  orbitControl(4, 4);//3D mouse control

  rotateX(-10);
  crypto();
  kwam();
 // kwamc();
 // karoed();
}

function crypto(){
  for(let r = 0; r <= 1; r += 0.01){
    beginShape(POINTS);
    stroke(205, -r*50+100, r*50+50);
    for(let theta = -2*180; theta <= 180*15; theta += 2){
      let phi = (180/2)*Math.exp(-theta/(8*180));
      let petalCut = 1 - (1/2) * pow((5/4)*pow(1-((3.6*theta%360)/180), 2)-1/4, 2);
      let hangDown = 1*pow(r, 2)*pow(1.3*r-1, 2)*sin(phi);

      if(0 < petalCut * (r * sin(phi)+hangDown*cos(phi))){
        let pX = 300 * petalCut * (r * sin(phi)+hangDown*cos(phi)) * sin(theta);
        let pY = -200 * petalCut * (r * cos(phi)-hangDown*sin(phi));
        let pZ = 350 * petalCut * (r * sin(phi)+hangDown*cos(phi)) * cos(theta);
        vertex(pX, pY, pZ);
      }
    }
    endShape();
  }
}

function kwam(){
  for(let r = 0; r <= 1; r += 0.005){
    beginShape(POINTS);
    stroke(310, (r*50-30)*3+5, 100);
    for(let theta = 0; theta <= 180*8; theta += 1.5){
      let phi = (180/2.5)*Math.exp(-theta/(6.5*180));
      let petalCut = 0.5+abs(asin(sin(2.25*theta))+120*sin(2.25*theta))/360;
      let hangDown = 2.3*pow(r, 2)*pow(0.8*r-1, 2)*sin(phi);

      if(0 < petalCut * (r * sin(phi)+hangDown*cos(phi))){
        let pX = 300 * (1-theta/10000) * petalCut * (r * sin(phi)+hangDown*cos(phi)) * sin(theta);
        let pY = -300 * (1-theta/10000) * petalCut * (r * cos(phi)-hangDown*sin(phi));
        let pZ = 300 * (1-theta/10000) * petalCut * (r * sin(phi)+hangDown*cos(phi)) * cos(theta);
        vertex(pX, pY, pZ);
      }
    }
    endShape();
  }
}