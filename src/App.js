import logo from './logo.svg';
import './App.css';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import sketch from "./components/DrawLines"
import randomLines from './components/RandomLines';
import MovingSquares from './components/MovingSquares';
import AnimationTennis from './components/AnimationTennis';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className='header'>
     <h1 className='two'>Valentin Paul</h1>
     <ReactP5Wrapper sketch={randomLines}></ReactP5Wrapper>
     </div>
    <ReactP5Wrapper sketch={AnimationTennis}/>


     <div>
      <h2>Full-Stack Developer </h2>
      <h2>based in Vienna, Austria.</h2>
     </div>

      <div className='moving-squares'>
    <ReactP5Wrapper sketch={MovingSquares}/>
    </div>

     <div className='circle-drawing'>
     <ReactP5Wrapper sketch={sketch}/>
     </div>
   
   
    
    
    
   
      </header>
    </div>
  );
}

export default App;
