import {NavLink} from 'react-router-dom'
import s from '../style/Navbar.module.scss'
import logo from '../assets/images/Logo (1).png'

export const Navbar =()=>{
 return (
   <>
   <nav className={s.navbarStyle}>
       <ul>
        <li>
       <NavLink to ={"/"}></NavLink>
       </li>
           <li>
            <NavLink  to ={"/home"}>HOME</NavLink>
           </li>
           <li className={s.circleStyle}><NavLink to ={"/about"}>ABOUT<img src={logo}></img></NavLink>
           </li>
           <li><a href= "https://dictionaryapi.dev/" target="_blank" ><NavLink to ={"/api"}>API</NavLink>
           </a></li>
        
    
           
       </ul>
   </nav>
   </>
 )
}