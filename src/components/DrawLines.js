function sketch(p){
    
    let width = window.innerWidth - 50;
    let height = (window.innerHeight / 5)

    let drawThings

    p.setup = function (){
        p.createCanvas(width, height)
        p.background(255, 255, 255)
        p.frameRate(200)
    }

    p.draw = function (){

        if (drawThings) {
        p.fill(0, 0, 0)
        p.noStroke()
        p.rect(p.random(width), 0, 5, height)
        p.fill(255, 255, 255)
        p.rect(p.mouseX , p.mouseY - height * 5 , width / 20 , height * 10)
          }
          else{
            p.textSize(30)
            p.background(255);
            p.fill(0);
            p.text("click me", p.mouseX, p.mouseY)
          }
    }; 

    p.mousePressed = () => {
        drawThings = !drawThings;
        p.background(255);
      }
};

export default sketch