import himage from '../assets/images/Rectangle 2.png'
import s from '../style/Header.module.scss'


export const Header =()=>{
    return(
        <header className={s.headerStyle}>
        <img src={himage} alt="header-image" />
        <h1 className={s.titleStyle}>Lexiconline</h1>
        </header>
    )
}