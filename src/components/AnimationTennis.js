import tennis from "./tennisball.obj"

function AnimationTennis(p){

let width = (window.innerWidth > window.innerHeight ? window.innerWidth/4.1 : window.innerWidth/1.5)
let ani;
let rot = 0
let scaleNum = 0.5

    p.preload = () =>{
        ani = p.loadModel(tennis)
    }

    p.setup = () =>{
        p.createCanvas(width, 250, p.WEBGL)
    }


    p.draw = ()=>{
        rot += 0.1
        p.background(0, 0, 0)
        // p.rotateZ(p.frameCount * 0.01);
        // p.rotateX(p.frameCount * 0.01);
        p. translate(0, 50, 0);
        p. rotateX(3);
        // p. rotateZ(p.frameCount * 0.01);
        // p.rotateX(p.frameCount * 0.01);
        p.fill(255, 255, 255)
        p.rotateY(p.frameCount * 0.015);
        p.strokeWeight(0.2)
        p.scale(scaleNum)
        p.model(ani)



        if ((p.mouseX < width) && (p.mouseX > 0) &&
        (p.mouseY > 0) && (p.mouseY < 250)) {
            scaleNum = 0.58
        }
        else{
            scaleNum = 0.5
        }
    }
}

export default AnimationTennis