import ReactDOM from 'react-dom'
import React from 'react'
import './styles.css'
import App from './App'

ReactDOM.render(
  <>

    <div className="grid">
    <header>
        <div>
          <a to="/">Design & Technology</a>
        </div>

    </header>
      <div className="page">
        <div className="content">
          <h1>Danny Ruchtie</h1>
        </div>  
    </div>
    
    
    <footer>
    <div>
      <a target="_blank" href="http://codesandbox.io/u/dannyruchtie">csb</a>
      <a target="_blank" href="https://twitter.com/DannyRuchtie">tw</a>
      <a target="_blank" href="https://www.instagram.com/dannyruchtie/">ig</a>
      <a target="_blank"href="https://vimeo.com/druchtie">vm</a>
      <a target="_blank" href="https://www.linkedin.com/in/dannyruchtie/">li</a>
      <a href="mailto:druchtie@gmail.com">mail</a> 
      </div>
    </footer>
    
    </div>
    
        <App />
  </>,
  document.getElementById('root')
)
