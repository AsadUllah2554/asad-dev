import React,{useEffect, useState} from "react";
import "./components.css"

function Slider(){

    const [sliderData] = useState([ 
        {
            key: 1,
            name:"iPhone Hub",
            description: "iPhone Hub is a React based e-commerce store",
            url: 'https://iphonehubstore.netlify.app',
            img:'/images/screenshots/iPhoneHub1.png'
          
          },
          
          {
           
            key: 2,
            name:"Food Fun",
            description: "Food Fun is a HTML, CSS, JS based Restaurant website",
            url: 'https://max-food.netlify.app',
            img:'/images/screenshots/FoodFun1.png'
           
          },
        
          {
           
            key: 3,
            name:"Food Fun",
            description: "Food Fun is a HTML, CSS, JS based Responsive Restaurant website",
            url: 'https://max-food.netlify.app',
            img:'/images/screenshots/FoodFun2.png'
          },
        
          {
           
            key: 4,
            name:"Speed Typing Game",
            description: "It is a typing speed checker app created in React",
            url: 'https://speed-typing-dev.netlify.app',
            img:'/images/screenshots/SpeedTypingGame.png'
          },
        
          {
           
            key: 5,
            name:"PicSome",
            description: "It is React based Images e-commerce store UI",
            url: 'https://aestheticregimegym.netlify.app/',
            img:'/images/screenshots/PicSome.png'
           
          },
        
          {
           
            key: 6,
            name:"Aesthetic Regime",
            description: "It is a Gym website for a local gym",
            url: 'https://picsomeimgaesstore.netlify.app',
            img:'/images/screenshots/GymWebsite.png'
           
          },
          {
           
            key: 7,
            name:"Meme Generator",
            description: "This is a react dynamic app which fetch data from an Api and render on screen ",
            url: 'https://meme-generator-asad.netlify.app/',
            img:'/images/screenshots/meme.png'
           
          },

          {
           
            key: 8,
            name:"Quiz App",
            description: "This is a Quiz app created using Vanilla JavaScript ",
            url: 'https://jsfiddle.net/asad2554/45drcwj2/7/',
            img:'/images/screenshots/quiz.png'
           
          },
        ]

    )

    const [index,setIndex] = useState(0);
    
    function increament(){
        if(index !== parseInt(sliderData.length)-1){
            setIndex(index=>index + 1)
        }
        else if(index === parseInt(sliderData.length)-1){
          setIndex(0)
        }
        
    }
    function decreament(){
        if(index !== 0){
            setIndex(index=>index - 1)
        }
        else if (index === 0){
          setIndex(sliderData.length-1)
        }
    }
    useEffect(() => {
      const timer = setTimeout(() => {
        if(index !== parseInt(sliderData.length)-1){
       setIndex(index=>index + 1)
      }
      else if(index === parseInt(sliderData.length)-1){
        setIndex(0)
      }
      }, 2000);
      return () => clearTimeout(timer);
    }, [index]);


return(
   <>
   
   <i class="ri-arrow-left-s-line caro-icon caro-left-btn" onClick={decreament}></i>
        <div className="slider">

        <img src={sliderData[index].img} alt="slider"  />
        <h1 > {sliderData[index].name} </h1>
        <p className="slider-description">
        {sliderData[index].description}    
        </p>
     
        <h5>
            Visit at <a href={sliderData[index].url} target="_blank" className="light-yellow">{sliderData[index].name}</a> 
        </h5>

        </div>
        <i class="ri-arrow-right-s-line caro-icon caro-right-btn" onClick={increament}></i>
        </>
)


}

export default Slider;