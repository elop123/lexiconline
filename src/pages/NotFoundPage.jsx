import React from 'react';
import s from '../style/NotFoundPage.module.scss'

export const NotFoundPage = () =>{
    return(
    <div className={s.notFoundStyle}>
 <h1>404 Error... </h1>
 <p>Not found page</p>
 <p>The page you are looking for does not exist</p>
    </div>)
}