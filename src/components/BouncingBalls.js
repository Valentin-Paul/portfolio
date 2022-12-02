



function BouncingBalls(p) {

  let numBalls = 3;
  let spring = 0.05;
  let gravity = 0.1;
  let friction = -0.9;
  let balls = [];
  let height = window.innerHeight / 2;
  let width = window.innerWidth - 50;
  let hash = "";
  let cnv;
  let lock = false;

  let clicking = (t, event) => {
    if (p.mouseX < width && p.mouseX > 0 && p.mouseY > 0 && p.mouseY < height ) {
      p.mousePressed = () => {
        window.location.href = t;
      };
    } 
    else{
        p.mousePressed = () => {
           
          };
    }
  };

  

// const press = p.mouseClicked = (hash) => {
//     window.location.href = hash;
// }

  p.setup = () => {
    p.createCanvas(width, height);
    for (let i = 0; i < numBalls; i++) {
      balls[i] = new Ball(
        p.random(250, 550),
        p.random(0, 200),
        p.random(130, 170),
        i,
        balls
      );
    }
  
    p.noStroke();
    p.fill(255, 204);
  };

  p.draw = () => {
    console.log(hash)
    p.background(0);
    balls.forEach((ball, index) => {
      ball.collide();
      ball.move();
      ball.display(index);
    });
   
    // console.log(lock);
    // console.log("hash is", hash);
  };

  class Ball {
    constructor(xin, yin, din, idin, oin) {
      this.x = xin;
      this.y = yin;
      this.vx = 0;
      this.vy = 0;
      this.diameter = din;
      this.id = idin;
      this.others = oin;
    }

    collide() {
      if (
        p.mouseX < this.x + this.diameter &&
        p.mouseX > this.x - this.diameter &&
        p.mouseY > this.y - this.diameter &&
        p.mouseY < this.y + this.diameter
      ) {
      } else {
        for (let i = this.id + 1; i < numBalls; i++) {
          // console.log(others[i]);
          let dx = this.others[i].x - this.x;
          let dy = this.others[i].y - this.y;
          let distance = p.sqrt(dx * dx + dy * dy);
          let minDist = this.others[i].diameter / 2 + this.diameter / 2;
          //   console.log(distance);
          //console.log(minDist);
          if (distance < minDist) {
            //console.log("2");
            let angle = p.atan2(dy, dx);
            let targetX = this.x + p.cos(angle) * minDist;
            let targetY = this.y + p.sin(angle) * minDist;
            let ax = (targetX - this.others[i].x) * spring;
            let ay = (targetY - this.others[i].y) * spring;
            this.vx -= ax;
            this.vy -= ay;
            this.others[i].vx += ax;
            this.others[i].vy += ay;
          }
        }
      }
    }

    move() {
      if (
        p.mouseX < this.x + this.diameter * p.cos(1) &&
        p.mouseX > this.x - this.diameter * p.cos(1) &&
        p.mouseY > this.y - this.diameter * p.sin(0.5) &&
        p.mouseY < this.y + this.diameter * p.sin(0.5)
      ) {
        this.vy += 0;
        this.x += 0;
        this.y += 0;
      } else {
        this.vy += gravity;
        this.x += this.vx;
        this.y += this.vy;

        if (this.x + this.diameter / 2 > width) {
          this.x = width - this.diameter / 2;
          this.vx *= friction;
        } else if (this.x - this.diameter / 2 < 0) {
          this.x = this.diameter / 2;
          this.vx *= friction;
        }
        if (this.y + this.diameter / 2 > height) {
          this.y = height - this.diameter / 2;
          this.vy *= friction;
        } else if (this.y - this.diameter / 2 < 0) {
          this.y = this.diameter / 2;
          this.vy *= friction;
        }
      }
    }

    display(z) {
       
            if (
                p.mouseX < this.x + this.diameter * p.cos(1) &&
                p.mouseX > this.x - this.diameter * p.cos(1) &&
                p.mouseY > this.y - this.diameter * p.sin(0.5) &&
                p.mouseY < this.y + this.diameter * p.sin(0.5) 
              ) {
                p.textSize(35);
                p.textFont("Deacon Blues Super-Italic");
                if(z === 0){
                    p.text("Home", this.x - this.diameter * p.sin(0.5), this.y);
                    return hash = "#home";
                }
                else if(z === 1){
                    p.text("Projects", this.x - this.diameter * p.sin(0.5), this.y);
                    return hash = "#projects";
                }

                else if(z === 2){
                    p.text("Contact", this.x - this.diameter * p.sin(0.5), this.y);             
                    return hash = "#contact";
                }
                else{
                    return hash = "#"
                }

                
                 
              }
              
                                  
                else {
                   
                       
                        p.fill(250);
                        p.ellipse(this.x, this.y, this.diameter, this.diameter);
                      }
                      clicking(hash)
    }
            
  }
 
}



export default BouncingBalls;
