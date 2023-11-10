import newsLogo from '../../assets/loggo.png'
import styles from './Footer.module.css'



export default function FooterComponent() {
    return(
      <footer>
<div className={styles['footerTeam']}>
  <h2>Екип</h2>
 <p>Репортери</p>
 <p>Редактори</p>
 <p>Фоторепортери</p>
</div>

<div className={styles['footerContacts']}>
  <h2>Контакти</h2>
 <p>DNEWS</p>
 <p>София, България</p>
 <p>ул.Алеко Константинов 1002</p>
</div>

<div className={styles['footerAboutUs']}>
  <h2>Свържи се с нас</h2>
  <div className={styles['mail']}>

  <p className={styles['btnMail']}>
  <i className="fa-solid fa-envelope"> </i>
  </p>
  <p>newsroom@dnes.bg</p>
  </div>

</div>

        <div className={styles['newsLogo']}>
        <a href="www.facebook.com" >
          <img src={newsLogo} className={styles['logoPicture']} alt="React logo" />
        </a>
        <div className={styles['sociaMedia']}>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-linkedin"></i>

        </div>
        </div>

      </footer>
    )
}