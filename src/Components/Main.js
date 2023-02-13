import React from "react";
import {Link} from "react-router-dom"

import "./components.css"

function MainBody() {

    return (
        <div className="container">
            <div className="hello">
                <h1  className="main--h1">Hello.</h1>
            </div>
         <div className="container-typewriter">
         <div className="asad typed-out">
                <h1 className="main--h1">I am Asad</h1>
            </div>
         </div>
         <br />
            <div className="skill container-typewriter">
              <div className="typed-out2 "><h4 >Developer</h4></div>
              <div className="typed-out2 "><h4 >Designer</h4></div>
              <div className="typed-out2 "><h4 >Freelancer</h4></div>
            </div>
           <div className="btm"> <h2><Link to="/works" className='links nav-item '> <span className="yellow underline">Check out my Works </span></Link></h2></div>
           <div className="main-img">
            <picture>
                <img src="/Images/main1.jpg" alt="Developer" className="main--img" />
            </picture>
           </div>
    
         
        </div>
    )
}
export default MainBody;
