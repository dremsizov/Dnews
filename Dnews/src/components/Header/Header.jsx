
import Navigation from "../Navigation/NavigationBar"

import newsLogo from '../../assets/loggo.png'
import styles from './Header.module.css'





export default function HeaderComponent() {
    return(
      <header>


        <div className={styles['wrapper']}> 
        <div className={styles['newsLogo']}>
        <a href="#" >
          <img src={newsLogo} className={styles['logoPicture']} alt="React logo" />
        </a>
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