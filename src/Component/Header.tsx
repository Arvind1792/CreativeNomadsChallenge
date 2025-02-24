
import ps6 from '../assets/ps6img.png';
import './styles.css';
import booking from '../assets/booking.png'
const Header = () => {
  return (
    <div className="h-[120px] w-full headermaindiv flex items-center justify-around  text-white px-4">
      {/* Logo Section */}
      <div className="flex items-center justify-start gap-2">
        <img className="h-[67px] w-[190px]" src={ps6} alt="ps6img" />
      </div>

      {/* Navigation Links */}
      <div className="flex gap-9 items-center">
        <p className="font-bold text-lg uppercase">PlayStation 6</p>
        <p className="cursor-pointer hover:text-blue-500 uppercase">Features</p>
        <p className="cursor-pointer hover:text-blue-500 uppercase">Games</p>
        <p className="cursor-pointer hover:text-blue-500 uppercase">Accessories</p>
        <p className="cursor-pointer hover:text-blue-500 uppercase">Contact</p>
       
    </div>
    <div className='preBookbutton box'>
               Pre book       <img className='w-[34px] h-[25px] ' src={booking} alt="" />
               </div>
      </div>
  );
};

export default Header;
