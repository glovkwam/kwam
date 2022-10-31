function setup() {
    createCanvas(600, 600);
    noLoop();
    strokeWeight(2);
  }
  
  function draw() {
    background(0, 255, 1000);
  
    const columns = 25;
    const rows = 35;
    const cellWidth = width / columns;
    const cellHeight = height / rows;
  
    for (let c = 0; c < columns; c++) {
      for (let r = 0; r < rows; r++) {
        const x = c * cellWidth + cellWidth / 2;
        const y = r * cellHeight + cellHeight / 2;
        
        drawFlower(x, y, min(cellWidth, cellHeight));
      }
    }
  }
  
  function drawFlower(x, y, size) {
    const flowerSize = random(size * .95, size * 1.95);
    const petalSize = flowerSize / 2;
    const spacing = petalSize / 2;
    
    fill(random(255), random(100), random(255));
    circle(x - spacing, y - spacing, petalSize);
    circle(x + spacing, y - spacing, petalSize);
    circle(x - spacing, y + spacing, petalSize);
    circle(x + spacing, y + spacing, petalSize);
    
    fill(random(255), random(255), random(255));
    circle(x, y, petalSize);
  }