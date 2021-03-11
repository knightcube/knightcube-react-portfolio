import React from 'react';
import MediumBlogContainer from './MediumBlogContainer';
import styles from './Articles.css'
import {Button,Tabs,Tab,Row} from 'react-bootstrap'

function App() {
  return (
      <div>
          <h1 className="title">Writing</h1>
          <p className="writing-description">I developed my passion for writing after getting inspired by Nicolas Cole's work. I then read his book and started applying his strategies. Eventually, I - </p>
          <ul>
                <li>Became a Top Writer on Medium.</li>
                <li>Wrote articles for major tech publications like the AR/VR Journey Magazine, Hacker Noon and XRPractices.</li>
                <li>Earned appreciation from the AI, VR & Gaming Editor at Hacker Noon.</li>
                <li>Garnered 1000+ monthly views consistently on my content for more than 12 months.</li>
          </ul>
          <br/>
          <h2>My recent work👇🏼</h2>
          <MediumBlogContainer/>
      </div>
   
  );
}

export default App;