import lightbulb from "./lightbulb.obj"

function AnimationGame(p){

let width = (window.innerWidth > window.innerHeight ? window.innerWidth/4.1 : window.innerWidth/1.5)
let ani;
let rot = 0
let scaleNum

    p.preload = () =>{
        ani = p.loadModel(lightbulb)
    }

    p.setup = () =>{
        p.createCanvas(width, 250, p.WEBGL)
       
    }

    p.draw = ()=>{
        rot += 0.1
        p.background(0, 0, 0)
        // p.rotateZ(p.frameCount * 0.01);
        // p.rotateX(p.frameCount * 0.01);
        p. translate(0, 100, -80);
        p. rotateX(0);
        p.rotateY(p.frameCount * -0.018)
        p.rotateZ(3.3)
        // p.rotateX(p.frameCount * 0.01);
        p.fill(255, 255, 255)
        // p.rotateZ(p.frameCount * -0.018);
        p.strokeWeight(0.35)
        p.fill(255, 255, 255)
        p.scale(scaleNum)
        p.model(ani)

        if ((p.mouseX < width) && (p.mouseX > 0) &&
        (p.mouseY > 0) && (p.mouseY < 250)) {
            scaleNum = 26
        }
        else{
            scaleNum = 23
        }
       
      
    }
}

export default AnimationGame