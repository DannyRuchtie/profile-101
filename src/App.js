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
           <svg className="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="12" fill=""/>
</svg>

</NavLink>
        </div>

        <div className="nav"> 
        <NavLink to="/work">Work</NavLink>
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
      <a target="_blank" href="https://read.cv/dannyruchtie">cv</a> 
      </div>
    </footer>
    


    </div>


    
    
    </BrowserRouter>
    </div>


   </div>
 
  )
}



