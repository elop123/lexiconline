import s from '../style/Footer.module.scss'
import logo from '../assets/images/Logo (1).png'

export const Footer =()=>{
    return(
        <footer className={s.footerStyle}>
            <div>
                <li>Adsress:</li>
                <li>Samestreet 232</li>
                <li>Luxemburg</li>
            </div>
            <div>
                <li>Contact:</li>
                <li>Email:somemail@mail.com</li>
                <li>Phone:44332343</li>
            </div>
            <div>
                <li>With special thanks to</li>
                <li>https:dictioanary.ap.dev</li>
                <li>for the awesome API </li>
            </div>
            <div className={s.logo}>
                <img src={logo} alt="logo" />
                <h3>Lexiconline</h3>
            </div>
        </footer>
    )
}