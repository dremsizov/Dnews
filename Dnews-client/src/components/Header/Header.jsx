
import Navigation from './Navigation/NavigationBar'

import newsLogo from '../../../public/assets/logoMic.png'
import styles from './Header.module.css'

import { Link } from "react-router-dom"





export default function HeaderComponent() {
    return(
      <header>


        <div className={styles['wrapper']}> 
        <div className={styles['newsLogo']}>
        <Link to='/'>
          <img src={newsLogo} className={styles['logoPicture']} alt="React logo" />
        </Link>
        <Link to='/'>
          <p className={styles['logoText']}>Твоите новини</p>
        </Link>
        
      </div>
      <div className={styles['icons']}>

        <div className={styles['searchBTN']}>
          <i className='fa-solid fa-magnifying-glass'></i>
        </div>

        <div className={styles['login1']}>
        
          <i className="fa-solid fa-arrow-right-to-bracket"></i>
        </div>

        <div className={styles['login2']}>
          <i className="fa-regular fa-address-card"></i>
        </div>
      </div>

        </div>
        <Navigation />
  
      </header>
    )
}