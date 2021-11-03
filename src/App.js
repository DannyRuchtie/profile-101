import { useRef, Suspense } from 'react'
import { BrowserRouter, Route, NavLink } from "react-router-dom";




import Home from "./home.js";
import Work from "./work.js";
import About from "./about.js";



export default function App() {
  return (

    <div>
    <div className="canvasholder">

    </div>

<div className="grid">



<BrowserRouter>





    <header>
        <div>
          <NavLink className="home" to="/">
           Danny Ruchtie</NavLink>
        </div>

        <div className="nav"> 
        <NavLink to="/work">Work</NavLink>
          <a target="_blank" href="https://read.cv/dannyruchtie">About</a>
         <a target="_blank" href="mailto:druchtie@gmail.com">Contact</a> 
        </div>
    </header>
      <div className="page">
      
     

        <div className="content">

        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/work" component={Work} />
        <Route path="/about" activeClassName="is-active" component={About} />

    
        </div>  



    <footer>
    <div>
      <a target="_blank" href="http://codesandbox.io/u/dannyruchtie">csb</a>
      <a target="_blank" href="https://twitter.com/DannyRuchtie">tw</a>
      <a target="_blank" href="https://www.instagram.com/dannyruchtie/">ig</a>
      <a target="_blank"href="https://vimeo.com/druchtie">vm</a>
      <a target="_blank" href="https://www.linkedin.com/in/dannyruchtie/">li</a>
           <a target="_blank" href="https://dannyruchtie.tumblr.com">tblr</a>
      </div>
    </footer>
    


    </div>


    
    
    </BrowserRouter>
    </div>


   </div>
 
  )
}

function Bubbles() {
  const ref = useRef()
  useFrame((state, delta) => void (ref.current.rotation.y = MathUtils.damp(ref.current.rotation.y, (-state.mouse.x * Math.PI) / 6, 0.75, delta)))
  return (
    <Instances limit={particles.length} ref={ref} castShadow receiveShadow position={[1, 10, 0]}>
      <sphereBufferGeometry args={[1, 24, 24]} />
      <meshStandardMaterial roughness={1} color="#fff" />
      {particles.map((data, i) => (
        <Bubble key={i} {...data} />
      ))}
    </Instances>
  )
}

function Bubble({ factor, speed, xFactor, yFactor, zFactor }) {
  const ref = useRef()
  useFrame((state) => {
    const t = factor + state.clock.elapsedTime * (speed / 2)
    ref.current.scale.setScalar(Math.max(1.5, Math.cos(t) * 5))
    ref.current.position.set(
      Math.cos(t) + Math.sin(t * 1) / 10 + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
      Math.sin(t) + Math.cos(t * 2) / 10 + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
      Math.sin(t) + Math.cos(t * 2) / 10 + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
    )
  })
  return <Instance ref={ref} />
}
