import himage from '../assets/images/Rectangle 2.png'
import logo from '../assets/images/Logo (1).png'
import s from '../style/Header.module.scss'


export const Header =()=>{
    return(
    <div>
        <header className={s.headerStyle}>
        <img className={s.imageStyle} src={himage} alt="header-image" />
        <div className={s.circle}>
           <img src={logo} alt="logo-book" className={s.bookLogo} />
        </div>
        <h1 className={s.titleStyle}>Lexiconline</h1>
        </header>
    </div>
    )
}