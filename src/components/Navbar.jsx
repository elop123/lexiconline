import {NavLink} from 'react-router-dom'
import s from '../style/Navbar.module.scss'



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
          <li className={s.circleStyle}>
          <NavLink to ={"/about"}>ABOUT</NavLink>
          </li>
          <li><a href= "https://dictionaryapi.dev/" target="_blank" >API</a></li>
      </ul>
  </nav>
  </>
 )
}