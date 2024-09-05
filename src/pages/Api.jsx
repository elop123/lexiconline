import React from 'react';
import s from '../style/Api.module.scss'

export const Api = () =>{
    return(
    <div className={s.apiStyle}>
 <h1>Api page</h1>
 <p>Check out the <a href="https://dictionaryapi.dev/" target="_blank" rel="noopener noreferrer">Dictionary API</a> </p>
    </div>)
}