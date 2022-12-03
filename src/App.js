
import './App.css';
import { useEffect, useState } from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import sketch from "./components/DrawLines"
import randomLines from './components/RandomLines';
import MovingSquares from './components/MovingSquares';
import AnimationTennis from './components/AnimationTennis';
import AnimationBurger from './components/AnimationBurger';
import AnimationDog from './components/AnimationDog';
import AnimationGame from './components/AnimationGame';
import BouncingBalls from "./components/BouncingBalls"
import Loading from "react-fullscreen-loading";


function App() {

  const [loading, setLoading] = useState(true)


  const changeLoading = () =>{
    setLoading(false)
  }


  useEffect(() => {
    const timer = setTimeout(() => {
      changeLoading()
    }, 800);
    return () => clearTimeout(timer);
  }, []);


  // useEffect(()=>{

  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector("[data-scroll-container]"),
  //     smooth: true,
  //     mobile: {
  //       breakpoint: 0,
  //       smooth: true,
  //     },
  //     tablet: {
  //       breakpoint: 0,
  //       smooth: true,
  //     },
  //   })
  //   const anchorLinks = document.querySelectorAll(
  //     'a[href^=\\#]:not([href$=\\#])'
  //   );
  
  //   anchorLinks.forEach((anchorLink) => {
  //     let hashval = anchorLink.getAttribute('href');
  //     let target = document.querySelector(hashval);
  
  //     anchorLink.addEventListener('click', (e) => {
  //       e.preventDefault();
  //       e.stopPropagation();
  
  //       anchorLinks.forEach((anchorLink) => {
  //         anchorLink.classList.remove('active');
  //       });
  
  //       e.target.classList.add('active');
  
  //       scroll.scrollTo(target);
  //     });
  //   });
  // })

  return (
    <div className="App" data-scroll-container>
      <header className="App-header">
      {loading === true? <Loading loading={true} background="black" loaderColor="white" /> : null}
      <div id="home" data-scroll data-scroll-speed="2">
      <div className="header">
          <h1 className="two">Valentin Paul</h1>
          <ReactP5Wrapper sketch={randomLines}></ReactP5Wrapper>
        </div>

        <div className='description'>
          <p>Full-Stack Developer</p>
          <p>based in Vienna, Austria</p>
          <p>Open for Projects</p>
        </div>

       <ReactP5Wrapper sketch={BouncingBalls} id="bouncing-balls"></ReactP5Wrapper>
      </div>
        

        {/* <ReactP5Wrapper sketch={Arrow}></ReactP5Wrapper> */}


{/* <div className="moving-squares">
          <ReactP5Wrapper sketch={MovingSquares} />
        </div> */}
     
        <div className="projects" id="projects" data-scroll data-scroll-speed="2">
        <h2 id='projects-header'>Projects</h2>
        <div className="animations">
          <a href="https://schluckreflex.netlify.app">
            <div className="game">
              <h3>Sticky Bullet</h3>
              <p>Pure Javascript Game</p>
              <ReactP5Wrapper sketch={AnimationGame} />
             
            </div>
          </a>

          <a href="https://schluckreflex.netlify.app">
            <div className="burger">
              <h3>Schluckreflex</h3>
               <p>Foodblog</p>
              <ReactP5Wrapper sketch={AnimationBurger} loading={changeLoading}/>
             
            </div>
          </a>

          <a href="https://tcamlangensteg.netlify.app/">
            <div className="tennis">
              <h3>Tennis Club Am Langen Steg</h3>
              <p>Website for Tennsis Club</p>
              <ReactP5Wrapper sketch={AnimationTennis} />
             
            </div>
          </a>

          <a href="https://puppies-palace.netlify.app">
            <div className="dog">
              <h3>Puppies Palace</h3>
              <p>Website for Dog School</p>
              <ReactP5Wrapper sketch={AnimationDog} />
              
            </div>
          </a>
        </div>
        </div>
        
        <div id="contact" >
        <div className="circle-drawing">
          <ReactP5Wrapper sketch={sketch} />
        </div>

        <div className='contact'>
          <h3>Valentin Paul</h3>
          <p>Mobil: +49151/53798985</p>
          <p>Mail: valentin@vamptech.de</p>
          <p>Github: www.github.com/Valentin-Paul</p>
          <p>LinkedIn: www.linkedin.com/in/valentin-paul1/</p>
        </div>
        </div>

       

      

        
      </header>
    </div>
  );
}

export default App;
