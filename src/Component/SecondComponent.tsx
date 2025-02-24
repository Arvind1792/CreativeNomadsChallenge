import React, { useState } from "react";
import { motion } from "framer-motion";
import './styles.css';
import image1 from '../assets/controller1.png';
import image2 from '../assets/controller2.png';
import image3 from '../assets/controller3.png';
const SecondComponent = () => {
    const [hovered, setHovered] = useState(null); // Track hovered image
  return (
    <div className='secondcomponent w-screen h-screen bg-black  flex flex-col justify-center items-center'>
       
       <div className='SecHeading flex flex-col justify-center items-center'>

            <h1 className="textUpperAndBold">DualSense 2 Controller</h1>
            <h1 className="textUpperAndBold">The Ultimate Gaming Companion</h1>
            <p >Feel Every Moment, Control Every Move</p>

       </div>

       <div className="SecImages flex justify-center items-center ">
        {/* Image 1 (Left) */}
        <motion.div
          onMouseEnter={() => setHovered("left")}
          onMouseLeave={() => setHovered(null)}
          animate={{
            scale: hovered === "left" ? 1.3 : hovered ? 1 : 1, // Scales up on hover, shrinks middle
          }}
          transition={{ 
            type: "tween", 
            duration: 0.5, 
            ease: "easeInOut" 
          }}
          className="w-[430px] h-[390px] border-[13px] border-black shadow-[0px_0px_17px_9px_#3C52E6]"
        >
          <img src={image1} alt="Image 1" className="w-full h-full object-cover" />
        </motion.div>

        {/* Image 2 (Middle, Initially Larger) */}
        <motion.div
          onMouseEnter={() => setHovered("middle")}
          onMouseLeave={() => setHovered(null)}
          animate={{
            scale: hovered === "middle" || !hovered ? 1.3 : 1,// Shrinks when others are hovered
          }}
          transition={{ 
            type: "tween", 
            duration: 0.5, 
            ease: "easeInOut" 
          }}
          className="w-[430px] h-[390px] border-[13px] border-black shadow-[0px_0px_17px_9px_#3C52E6]"
        >
          <img src={image2} alt="Image 2" className="w-full h-full object-cover" />
        </motion.div>

        {/* Image 3 (Right) */}
        <motion.div
          onMouseEnter={() => setHovered("right")}
          onMouseLeave={() => setHovered(null)}
          animate={{
            scale: hovered === "right" ? 1.3 : hovered ? 1 : 1, // Scales up on hover, shrinks middle
          }}
          transition={{ 
            type: "tween", 
            duration: 0.5, 
            ease: "easeInOut" 
          }}
          className="w-[430px] h-[390px] border-[13px] border-black shadow-[0px_0px_17px_9px_#3C52E6]"
        >
          <img src={image3} alt="Image 3" className="w-full h-full object-cover" />
        </motion.div>
      </div>



    </div>
  )
}

export default SecondComponent