import gameboy from "./gameboy2.obj"

function AnimationGame(p){

    let width = window.innerWidth / 4.1
let ani;
let rot = 0
let scaleNum

    p.preload = () =>{
        ani = p.loadModel(gameboy)
    }

    p.setup = () =>{
        p.createCanvas(width, 250, p.WEBGL)
       
    }

    p.draw = ()=>{
        rot += 0.1
        p.background(0, 0, 0)
        // p.rotateZ(p.frameCount * 0.01);
        // p.rotateX(p.frameCount * 0.01);
        p. translate(0, -5, 120);
        p. rotateX(14);
        p.rotateY(3.15)
        // p.rotateX(p.frameCount * 0.01);
        p.fill(255, 255, 255)
        p.rotateZ(p.frameCount * -0.018);
        p.strokeWeight(0.05)
        p.fill(255, 255, 255)
        p.scale(scaleNum)
        p.model(ani)

        if ((p.mouseX < width) && (p.mouseX > 0) &&
        (p.mouseY > 0) && (p.mouseY < 250)) {
            scaleNum = 38
        }
        else{
            scaleNum = 32
        }
       
      
    }
}

export default AnimationGame