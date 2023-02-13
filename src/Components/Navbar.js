import React,{ useState,useRef,useEffect } from "react";
import { Link } from 'react-router-dom'


import "./components.css"

function Navbar() {
    const [menuClass,setMenuClass] = useState(false);
    const menuRef = useRef();
  
    function showNavBar(){
        setMenuClass(prevClass=> !prevClass)
        console.log(menuClass)
        // menuRef.current.classList.toggle("open")
        console.log(menuRef.current.classList)
       
        
    }

    useEffect(() => {
        const closeMenu = event => {
            if(menuRef.current.classList[1] === "open"){
            menuRef.current.classList.remove("open")
            setMenuClass(prevClass => !prevClass)
        }
        };
        
        document.addEventListener('mousedown', closeMenu);
        return () => {
        document.removeEventListener('mousedown', closeMenu);
          
        };
      }, []);

      useEffect(() => {
        const closeMenuOnScroll = event => {
            if(menuRef.current.classList.length === 2){
            menuRef.current.classList.remove("open") 
      
            setMenuClass(prevClass => !prevClass)
        }
        };
        document.addEventListener('scroll', closeMenuOnScroll);
        return () => {
        document.removeEventListener('scroll', closeMenuOnScroll);
          
        };
      }, []);

    return (
        <nav>
            <div class="right">
                <div class="logo">
                    <h2><Link to="/" className='links'><span className="yellow  ">Asad</span></Link></h2>
                </div>
                <ul class={ menuClass ? "open navbar":"navbar"} id="navv" ref={menuRef}>
                    <li><Link to="/" className='links'> home </Link></li>
                    <li><Link to="/works" className='links'> works </Link></li>
                    <li><Link to="/skills" className='links'> skills </Link></li>
                    <li><Link to="/contact" className='links'> contact me </Link></li>
                </ul>
                <i className="ri-menu-line"  id="menu-icon"  onClick={showNavBar} ></i>
                {/* { menuClass ? "ri-menu-line":"ri-menu-line open"} */}
            </div>
        </nav>
    )
}

export default Navbar;