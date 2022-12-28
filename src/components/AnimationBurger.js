import burger from "./hotdog2.obj"

function AnimationBurger(p){

let width = (window.innerWidth > window.innerHeight ? window.innerWidth/4.1 : window.innerWidth/1.5)
let ani;
let rot = 0
let scaleNum

    p.preload = () =>{
        ani = p.loadModel(burger)
    }

    p.setup = () =>{
        p.createCanvas(width, 250, p.WEBGL)
       
    }

    p.draw = ()=>{
        rot += 0.1
        p.background(0, 0, 0)
        // p.rotateZ(p.frameCount * 0.01);
        // p.rotateX(p.frameCount * 0.01);
        p. translate(0, 0, 100);
        p. rotateX(2.7);
        // p.rotateX(p.frameCount * 0.01);
        p.fill(255, 255, 255)
        p.rotateY(p.frameCount * 0.01);
        p.strokeWeight(0.1)
        p.fill(255, 255, 255)
        p.scale(scaleNum)
        p.model(ani)
       

            if ((p.mouseX < width) && (p.mouseX > 0) &&
        (p.mouseY > 0) && (p.mouseY < 250)) {
            scaleNum = 500
        }
        else{
            scaleNum = 420
        }
      
    }
}

export default AnimationBurger