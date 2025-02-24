import { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";
import image1 from "../assets copy/image 9.png";
import image2 from "../assets copy/image 10.png";
import image3 from "../assets copy/image 21.png";
import image5 from "../assets copy/image 22.png";
import image4 from "../assets copy/image 23.png";
import image6 from "../assets copy/image 19 (1).png";
import image8 from "../assets copy/Rectangle 16.png";
import image7 from "../assets copy/Natural User Interface 2.png";

const ThirdComponent = () => {
    const [DynamicContent, setDynamicContent] = useState({
        header: "What sets us apart !",
        content: `Discover the groundbreaking features that make the PlayStation 6 the 
            ultimate gaming console. From stunning 8K visuals to intelligent AI-driven 
            gameplay, every element is designed to immerse you in a world of unparalleled 
            realism and performance.`,
      });
      
      const DynamicContentarray = [
        { 
          header: "8K Ultra HD Graphics",
          content: "Feel every moment like never before with the enhanced DualSense 2 controller. Featuring next-gen haptic feedback, improved adaptive triggers, and precision motion sensors, the PS6 delivers unmatched control and responsiveness, pulling you deeper."
        },
        { 
          header: "Next-Gen Ray Tracing",
          content: "Step into a world of real-time lighting and reflections with the most advanced ray tracing technology. Enjoy hyper-realistic shadows, reflections, and global illumination that bring your favorite games to life with cinematic-level realism."
        },
        { 
          header: "AI-Powered Gameplay",
          content: "Say goodbye to loading screens with the lightning-fast SSD 3.0. Games load in an instant, worlds render seamlessly, and transitions are smoother than ever. With speeds that redefine next-gen gaming, every second counts in your immersive experience."
        },
        { 
          header: "DualSense 2 Control",
          content: "Experience breathtaking visuals like never before with true 8K Ultra HD resolution. Every detail, from lifelike character expressions to stunning open-world environments, is rendered with unparalleled clarity and depth, making your games more immersive than ever."
        },
        { 
          header: "SSD 3.0 Speed",
          content: "Harness the power of cutting-edge AI that adapts to your playstyle, creating more dynamic enemies, smarter NPCs, and unpredictable challenges. The PS6 revolutionizes gaming with self-learning AI that makes every playthrough unique and engaging."
        }
      ];
      
      const onhoverfunc = (value: number) => {
        setDynamicContent(DynamicContentarray[value]); // ✅ Now passing an object
      };
      
  return (
    <div className="thirdcomponent w-screen h-screen bg-black  flex flex-col justify-center items-center">
      <div className="thirdHeading flex flex-col justify-center items-center">
        <h1 className="textUpperAndBold">Revolutionary Features </h1>
      </div>
      <div className="relative w-full bg-black flex flex-row justify-start items-start">
  {/* First Div (Plates) - w-10/12 */}
  <div className="plates flex flex-col gap-10 w-10/12 items-start relative z-10">
    
    {/* Plate 1 */}
     <motion.div
      whileHover={{
        scale: 1.05, // Slightly scale up
        x: 20, // Move slightly to the right
        boxShadow: "0px 0px 20px 4px #0033A0", // Glowing shadow effect
      }}
      transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
       className="flex items-center bg-gradient-to-r from-[#031A85] to-[#01061F] 
         p-2  rounded-md w-8/12" onMouseEnter={()=>onhoverfunc(0)}>
      <img src={image1} alt="8K Graphics" className="w-8/12 h-16 object-cover rounded-sm" />
      <p className="text-white plates-text font-bold uppercase ml-4">
        8K Ultra HD Graphics
      </p>
    </motion.div>



    {/* Plate 2 */}
    <motion.div
      whileHover={{
        scale: 1.05, // Slightly scale up
        x: 20, // Move slightly to the right
        boxShadow: "0px 0px 20px 4px #0033A0", // Glowing shadow effect
      }}
      transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
       className="flex items-center bg-gradient-to-r from-[#031A85] to-[#01061F] 
     p-2  rounded-md w-7/12" onMouseEnter={()=>onhoverfunc(1)}
>
      <img src={image2} alt="Ray Tracing" className="w-7/12 h-16 object-cover rounded-sm" />
      <p className="text-white plates-text font-bold uppercase ml-4">
        Next-Gen Ray Tracing
      </p>
    </motion.div>

    {/* Plate 3 */}
    <motion.div
      whileHover={{
        scale: 1.05, // Slightly scale up
        x: 20, // Move slightly to the right
        boxShadow: "0px 0px 20px 4px #0033A0", // Glowing shadow effect
      }}
      transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }} className="flex items-center bg-gradient-to-r from-[#031A85] to-[#01061F] 
        p-2  rounded-md w-6/12" onMouseEnter={()=>onhoverfunc(2)}>
      <img src={image3} alt="AI Gameplay" className="w-7/12 h-16 object-cover rounded-sm" />
      <p className="text-white plates-text font-bold uppercase ml-4">
        AI-Powered Gameplay
      </p>
    </motion.div>

    {/* Plate 4 */}
    <motion.div
      whileHover={{
        scale: 1.05, // Slightly scale up
        x: 20, // Move slightly to the right
        boxShadow: "0px 0px 20px 4px #0033A0", // Glowing shadow effect
      }}
      transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }} className="flex items-center bg-gradient-to-r from-[#031A85] to-[#01061F]  
         p-2  rounded-md w-5/12" onMouseEnter={()=>onhoverfunc(3)}>
      <img src={image4} alt="DualSense" className="w-6/12 h-16 object-cover rounded-sm" />
      <p className="text-white plates-text font-bold uppercase ml-4">
        DualSense 2 Control
      </p>
    </motion.div>

    {/* Plate 5 */}
    <motion.div
      whileHover={{
        scale: 1.05, // Slightly scale up
        x: 20, // Move slightly to the right
        boxShadow: "0px 0px 20px 4px #0033A0", // Glowing shadow effect
      }}
      transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }} className="flex items-center bg-gradient-to-r from-[#031A85] to-[#01061F]  
         p-2  rounded-md w-4/12" onMouseEnter={()=>onhoverfunc(4)}>
      <img src={image5} alt="SSD Speed" className="w-6/12 h-16 object-cover rounded-sm" />
      <p className="text-white font-bold plates-text uppercase ml-4">
        SSD 3.0 Speed
      </p>
    </motion.div>

  </div>

  {/* Second Div (Right Section) - w-6/12 (Overlapping) */}
  <div className="absolute top-34 right-0 w-6/12 bg-black px-12 py-8 z-9">
    {/* Left Text Section */}
    <div className="w-[430px] text-white">
      <h2 className="text-4xl font-bold uppercase mb-4">{DynamicContent.header}</h2>
      <p className="text-xl DynamicContent leading-loose ">
        {DynamicContent.content}
      </p>
      {/* Button */}
      <button className="box featurebutton  ">
        More Features    <img className='w-[34px] h-[25px] ' src={image7} alt="" />
      </button>
    </div>

    {/* Right Images Container */}
    <div className="relative flex flex-col justify-between items-center">
      
      {/* Upper Floating Image */}
      <img src={image6} alt="Earbuds" 
          className="absolute earbuds w-[250px] h-auto object-cover" />

      {/* Right Image (Bottom) */}
      <img src={image8} alt="Metallic Surface" 
          className="absolute w-[170px] sideimage h-auto object-cover " />
    </div>

  </div>

</div>

    </div>
  );
};

export default ThirdComponent;
