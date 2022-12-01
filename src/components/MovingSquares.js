import { Color } from "p5";

function MovingSquares(p){
    let r1, r2, r3, r4, r5;
    let height = 200
    let width = window.innerWidth -50


   p.setup = () => {
        p.createCanvas(width, height);
        p.fill(155, 104);
        p.noStroke();
        r1 = new MRect(5, 134.0, 0.532, 0.1 * height, 10.0, 20.0);
        r2 = new MRect(2, 44.0, 0.166, 0.3 * height, 5.0, 100.0);
        r3 = new MRect(2, 58.0, 0.332, 0.4 * height, 10.0, 35.0);
        r4 = new MRect(1, 120.0, 0.0498, 0.9 * height, 15.0, 150.0);
        r5 = new MRect(3, 820.0, 0.198, 0.5 * height, 8.0, 40.0);
        }  
        
        // r1 = new MRect(5, 134.0, 0.532, 0.1 * height, 10.0, 20.0);
        // r2 = new MRect(2, 44.0, 0.166, 0.3 * height, 5.0, 100.0);
        // r3 = new MRect(2, 58.0, 0.332, 0.4 * height, 10.0, 35.0);
        // r4 = new MRect(1, 120.0, 0.0498, 0.9 * height, 15.0, 80.0);
        
        p.draw = () => {
            p.background(0);
            
            r1.display();
            p.fill(300)
            r2.display();
            r3.display();
            r4.display();
            r5.display();
            
            r1.move(p.mouseX - p.width / 4, p.mouseY + height * 0.2, 30);
            r2.move((p.mouseX + width * 0.1) % width, p.mouseY + height * 0.025, 20);
            r3.move(p.mouseX / 2, p.mouseY - height * 0.025, 40);
            r4.move(p.mouseX - p.width / 2, height - p.mouseY * 1.5, 50);
            r5.move(p.mouseX - p.width / 3, height - p.mouseY * 2, 50);

            // r1.move(p.mouseX - p.width / 2, p.mouseY + height * 0.2, 30);
            // r2.move((p.mouseX + width * 0.05) % width, p.mouseY + height * 0.025, 20);
            // r3.move(p.mouseX / 4, p.mouseY - height * 0.025, 40);
            // r4.move(p.mouseX - p.width / 2, height - p.mouseY, 50);
            }
            
            class MRect {
                constructor(iw, ixp, ih, iyp, id, it) {
                this.w = iw; // single bar width
                this.xpos = ixp; // rect xposition
                this.h = ih; // rect height
                this.ypos = iyp; // rect yposition
                this.d = id; // single bar distance
                this.t = it; // number of bars
                }
            
                move(posX, posY, damping) {
                    let dif = this.ypos - posY;
                    if (p.abs(dif) > 1) {
                        this.ypos -= dif / damping;
                    }
                    dif = this.xpos - posX;
                    if (p.abs(dif) > 1) {
                        this.xpos -= dif / damping;
                    }
                }
            
                display() {
                    for (let i = 0; i < this.t; i++) {
                        p.rect(
                        this.xpos + i * (this.d + this.w),
                        this.ypos,
                        this.w,
                        height * this.h
                        );
                    }
                }
            }
}

export default MovingSquares