import React from 'react'
import{Link,useNavigate} from 'react-router-dom'
// import { logo,sun } from './assets';
import sun from'./assets/sun.svg'
import logo from './assets/logo.png'
// import './Nav.css'
import CustomButton from './CustomButton'
import { useStateContext } from '../context'

 
const Navbar = () => {
    const navigate = useNavigate();
    const{address , connect} = useStateContext();


  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6 mt-2">
    <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] ml-12   rounded-[100px]">
     <Link to='/'>
       <img src={logo} alt="user" className="w-[90%] h-[90%] object-contain ml " />
        </Link> 
    
       
    </div>

    <div className="sm:flex hidden flex-row justify-end gap-4">
      <CustomButton 
        btnType="button"
        title={address ? 'Make a new post' : 'Connect'}
        styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
        handleClick={() => {
          if(address) navigate('create-post')
          else  connect();
        }}
      />

      <Link to="/profile">
        <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          <img src={sun} alt="user" className="w-[60%] h-[60%] object-contain" />
        </div>
      </Link>
    </div>
    </div>
    )
 
  
}

export default Navbar