function sketch(p) {
  let width = window.innerWidth / 1.1;
  let height = window.innerHeight / 4;
  let drawThings = false;
  let topLayer;

  p.setup = function () {
    p.createCanvas(width, height);
    topLayer = p.createGraphics(width, height);
    topLayer.background(0);
    topLayer.textSize(50);
    topLayer.textAlign(p.CENTER);
    topLayer.strokeWeight(40);
    topLayer.blendMode(p.REMOVE);
 

    // p.background(230)
    p.frameRate(10)
  };

  p.draw = function () {
    p.cursor(p.HAND)
    p.background(0);
    p.fill(250)
    p.text("Contact", width / 2, height / 2);
    p.textSize(60);
    p.textAlign(p.CENTER, p.CENTER);
    p.textFont("Deacon Blues Super-Italic");
    p.stroke(0);

    
    topLayer.rect(p.random(width), 0, 12, height);

    // if (p.mouseIsPressed) {
    //   topLayer.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
    // }

    if (drawThings) {
      p.image(topLayer, 0, 0);
      p.fill(250);
      p.noStroke();
      p.rect(p.random(width), 0, 2, height);
      // p.fill(230)
      // p.rect(p.mouseX , p.mouseY - height * 5 , width / 100 , height * 10)
    } else if (drawThings === false) {
      p.textSize(25);
      p.background(230);
      p.fill(0);
      p.stroke(0);

      p.line(0, height / 2.75, width, height / 2.75);
      p.line(0, (height / 2.75) * 2, width, (height / 2.75) * 2);
      p.line(width / 8.8, 0, width / 8.8, height);
      p.line((width / 8.8) * 2, 0, (width / 8.8) * 2, height);
      p.line((width / 8.8) * 3, 0, (width / 8.8) * 3, height);
      p.line((width / 8.8) * 4, 0, (width / 8.8) * 4, height);
      p.line((width / 8.8) * 5, 0, (width / 8.8) * 5, height);
      p.line((width / 8.8) * 6, 0, (width / 8.8) * 6, height);
      p.line((width / 8.8) * 7, 0, (width / 8.8) * 7, height);
      p.line((width / 8.8) * 8, 0, (width / 8.8) * 8, height);
      window.innerWidth > window.innerHeight ?
        p.text("click me", p.mouseX, p.mouseY ) :
        p.text("click me", width/2, height/2 )
      
    }
  };

  
      p.mousePressed = () => {
        if ((p.mouseX < width ) && (p.mouseX > 0) &&
    (p.mouseY > 0 ) && (p.mouseY < height) && drawThings === false) {
      drawThings = !drawThings;
      p.background(250);
    }
       
      };
    }



export default sketch;
