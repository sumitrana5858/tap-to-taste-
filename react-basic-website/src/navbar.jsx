import Logo from './logo';
import { FaArrowRight } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-md">
      <Logo />
      <ul className="flex space-x-6 text-gray-700 font-medium cursor-pointer">
         <li className='gap-15 text-amber-300' >Home</li>
         <li className='gap-18'>Features</li>
         <li className='gap-18'>Pricing</li>
         <li className='gap-18'>About us</li>
         <li className='gap-18'>Contact</li>
         <li className='gap-18'>Blog</li>
      </ul>
<button className='flex items-center justify-center text-center bg-orange-500 hover:bg-amber-700 mr-30 p-2 rounded-4xl font-bold mx-8 text-white'>Get started for free <span className='flex items-center justify-center text-center mx-2 '><FaArrowRight /></span></button>
    </nav>
  );
}
