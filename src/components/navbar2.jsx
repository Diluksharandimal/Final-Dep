import { useState } from 'react';
import logo from '../assets/e31.png'
import "./nav2.css"
//react icons
import { GrLanguage } from "react-icons/gr";
import{FaBars, FaXmark} from 'react-icons/fa6'
import { Link } from 'react-scroll';

//import { Link } from 'react-router-dom';


const Navbar2 = () => {

    const[isMenuOpen, setIsMenuOpen]=useState(false);

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems =[
        {link:"Department", path:"depa"},
        {link:"Drving Schools", path:"scl"},
        {link:"Applicants", path:"cus"},
        {link:"About Us", path:"about"},
        {path:"dep"}
    ]


    
  return (

    <>
    
    <nav className=' foot2 md:px-14 p-6 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0 z-10 rounded-br-3xl rounded-bl-3xl'>
        <div className='text-lg container mx-auto flex justify-between items-center font-medium ml-4 cursor-pointer'>
            <div className='flex space-x-14 items-center'>
                <a href="/" className='text-2x1 font-semibold flex items-center space-x-3 text-primary cursor-pointer'>
                    <img src={logo} alt="" className='w-24 inline-block items-center'/> 
                    </a>

                    {/*showing navItems using map */}
                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({link,path}) => <Link spy={true} smooth={true} offset={-100}key={Link} to={path} className='block hover:text-gray-100'>{link}</Link>)
                        }
                    </ul>
            </div>

            {/*language and signup */}
      
                <a href='/' className='hidden lg:flex items-center hover:bg-blue-800'><span></span></a>


                <button  className='bg-white py-2 px-8 transition-all duration-300 rounded-full right-8
                 hover:text-gray-200 hover:bg-blue-900 ' ><a href='dep'>Department</a></button>
                   <button  className='bg-white py-2 px-8 transition-all duration-300 rounded-full right-8
                 hover:text-gray-200 hover:bg-blue-900 ' ><a href='/'>Schools</a></button>
                   <button  className='bg-white py-2 px-8 transition-all duration-300 rounded-full right-8
                 hover:text-gray-200 hover:bg-blue-900 -mr-24' ><a href='/'>Customers</a></button>
      

            {/*menu button only dsplay on mobile */}
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='text-white focus:outline-none absolute
                focus:text-gray-300 z-100'>
                    {
                        isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary'/>):(<FaBars className='w-6 h-6 text-primary absolute z-10'/>)
                    }

                </button>
            </div>
        </div>
    </nav>
    
    <div className={`dro space-y-4 px-4 pt-24 pb-5 z-10 justify-center text-center rounded-bl-3xl rounded-br-3xl  absolute text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0"
     : "hidden"}`}>
        {
             navItems.map(({link,path}) => <Link spy={true} smooth={true} offset={-100}key={Link} to={path} className='block hover:text-gray-300'>{link}</Link>)
        }

    </div>

    {/*navItems for the mobile devices*/}
    </>
  );
};

export default Navbar2;

