import React from "react";
import { Link } from "react-router-dom"

function Skills() {

 
  return (
    <div class="works-container">
      <div class="works">
        <h1>HTML</h1>
        <h3>Things I learned</h3>
        <ul>
          <li>All the basic Tags such heading,img,ul etc</li>
          <li>Semantic Tags</li>
          <li>Tables and Lists</li>
          <li>Block and Inline element and much more</li>
        </ul>

      </div>
      <div class="works">
        <h1>CSS</h1>
        <h3>Things I learned</h3>
        <ul>
          <li>Nav-bar</li>
          <li>Transitions and Animations</li>
          <li>Buttons, Pagination and Box sizing</li>
          <li>Image Gallery and Drop Downs</li>
          <li>Borders, Margins, Paddings, Box Model, Outline, Text and Fonts</li>
        </ul>

      </div>
      <div class="works">
        <h1>JAVASCRIPT</h1>
        <ul>
          <li>DOM and DOM manipulation
          </li>
          <li>Prompts, Alerts, Popups and
            Selectors (queryselecter, selectbyID etc )</li>
          <li>React Router
          </li>
          <li>Event Handling (onClick, on mouse over etc)
          </li>
          <li>Intervals,
            String Functions and
            Objects</li>
          <li>ES6 Modules

          </li>
          <li>Arrow Function and Import/Export modules

          </li>
          <li>Fetch API and Asnchornus JS
            Mapping/Filtering

          </li>
        </ul>

      </div>
      <div class="works">
        <h1>REACT</h1>
        <ul>
          <li>JSX
          </li>
          <li>Handling Props and State</li>
          <li>React Router
          </li>
          <li>Handling Forms and saving data in State Object
          </li>
          <li>Mapping and Rendering components and
            Conditional Rendering</li>
          <li>Fetching data using useEffect() and Fetch

          </li>
          <li>Pagination,
            Filtering and Mapping components

          </li>
          <li>Event Handling

          </li>
        </ul>
      </div>
      <ul class="navbar" id="navv">
        <li><Link to="/skills/education" className='links'> Education </Link></li>
        <li><Link to="/works/certification" className='links'> Certificates </Link></li>

        
      </ul>
     
    </div>
  )
}
export default Skills;