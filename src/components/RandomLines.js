function randomLines(p){
    let num = 2000;
    let range = 50;
    let width = window.innerWidth/ 1.4;
    let height = window.innerHeight / 7
    
    let ax = [];
    let ay = [];

    p.setup = () => {
        p.createCanvas(width, height);
        for ( let i = 0; i < num; i++ ) {
          ax[i] = width / 2;
          ay[i] = height / 2;
        }
        p.frameRate(15);
      }


      p.draw = () => {
        p.background(0);
      
        // Shift all elements 1 place to the left
        for ( let i = 1; i < num; i++ ) {
          ax[i - 1] = ax[i];
          ay[i - 1] = ay[i];
        }
      
        // Put a new value at the end of the array
        ax[num - 1] += p.random(-range * 1.5, range * 1.5);
        ay[num - 1] += p.random(-range, range);
      
        // Constrain all points to the screen
        ax[num - 1] = p.constrain(ax[num - 1], 0, width);
        ay[num - 1] = p.constrain(ay[num - 1], 0, height);
      
        // Draw a line connecting the points
        for ( let j = 1; j < num; j++ ) {
          let val = j / num * 204.0 + 51;
          p.stroke(val);
          p.line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
        }
      }
}

export default randomLines