import React from 'react';
import Header from './Header';
import './styles.css';
import booking from '../assets/booking.png'
import goggle from '../assets/goggles.png'
import controller from '../assets/controller.png'
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';
const Home = () => {
  return (
    <div className=" w-screen h-screen ">
      <div className="div1  flex flex-col">
        {/* Header Section */}
        <div className="h-[120px] head flex justify-center items-center ">
          <Header />
        </div>

        {/* Intro Section */}
        <div className="intro flex flex-1 justify-center items-start">
            <div className='flex flex-1 justify-center items-center'>

           
          <div className="content  flex flex-col justify-end items-start ">
              <div>
            <p className='heading'>
            The Future of Gaming Is Here

            </p>
            <div className='w-[100px] h-[1px] border-b-2 border-white'>
 
            </div>
            </div>
            <div>
            <h1>Introducing PlayStation 6</h1>
            <h1>with Power and Precision</h1>
            </div>
            <p className="introfooter">A New Era of Gaming Begins, Where Every Moment Feels More Real, Every Action More Precise, and Every Experience More Immersive Than Ever Before, Redefining What’s Possible in the World of Play.</p>
         
         <div className='content-footer mt-5  flex flex-row justify-between '>
               <div className='preBookbutton box'>
               Pre book       <img className='w-[34px] h-[25px] ' src={booking} alt="" />
               </div>
               <div className='revealbutton box '>
               Watch the Reveal  <img className='w-[34px] h-[25px] ' src={goggle} alt="" />
               </div>
         </div>
          </div>
          </div>
          <div className="ps6img flex-1  flex justify-center items-center">
           <img className='w-[600px] ' src={controller} alt="" />
       
          </div>
        </div>
      </div>
      <SecondComponent/>
      <ThirdComponent/>
      <FourthComponent/>
    </div>
  );
};

export default Home;
