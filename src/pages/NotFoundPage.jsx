import React from 'react';
import s from '../style/NotFoundPage.module.scss'
import logo from '../assets/images/Logo (1).png'

export const NotFoundPage = () =>{
    return(
    <div className={s.notFoundStyle}>
        <div className={s.circle}>
           <img src={logo} alt="logo-book" className={s.bookLogo} />
        </div>
         <h1>404 Error... </h1>
         <p>Not found page</p>
         <p>The page you are looking for does not exist</p>
    </div>)
}