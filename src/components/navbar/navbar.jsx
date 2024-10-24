import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
const navbar = ({setShowLogin}) => {
    const[menu,setmenu]=useState("Home")
  const{getTotalCartAmount}=useContext(StoreContext);

  return (
    <div className='navbar'>
        <Link to="/"><img src={assets.logo1} alt="" className='logo'/></Link>
        <ul className='navbar-menu'>
            <Link to='/'onClick={()=>setmenu("Home")} className={menu==="Home"?"active":" "}>Home</Link>
            <a href='#explore-menu ' onClick={()=>setmenu("Menu")} className={menu==="Menu"?"active":" "}>Menu</a>
            <a href='#app-download'onClick={()=>setmenu("Mobile-App")} className={menu==="Mobile-App"?"active":" "}>Mobile-App</a>
            <a  href='#footer'onClick={()=>setmenu("Contact Us")} className={menu ==="Contact Us"?"active":" "}>Contact US</a>
        </ul>
        <div  className='navbar-right'>
        <Link to={'https://in.search.yahoo.com/search?fr=mcafee&type=E210IN714G0&p=chrom+seqrch'}><img src={assets.search_icon} alt=" "/></Link>
        <div className='navbar-search-icon'>
          <Link to={'/cart'}><img src={assets.basket_icon} alt=" "></img></Link>
          <div className={getTotalCartAmount()?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>SingIn</button>
        </div>
    </div>
  )
}

export default navbar

