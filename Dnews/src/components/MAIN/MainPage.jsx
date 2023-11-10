import styles from '../MAIN/MainPage.module.css'
import cardPic from '../../assets/ns.jpg'
import cardPic2 from '../../assets/asenVasilev.jpg'
import cardPic3 from '../../assets/beer.jpg'


export default function MainPage() {

    return (
        <>

        <div className={styles['wrapper']}>

        
       {/* CARUSEL */}
{/* <div className="gallery js-flickity"
  data-flickity-options='{ "wrapAround": true }'>
  <div className="gallery-cell">
  <div className={styles['newsLogo']}>
        <a href="#" >
          <img src={newsLogo} className={styles['logoPicture']} alt="React logo" />
        </a>
      </div>
  </div>
  <div className="gallery-cell"></div>
  <div className="gallery-cell"></div>
  <div className="gallery-cell"></div>
  <div className="gallery-cell"></div>
</div> */}

{/* CARDS */}

<div className= {styles['cardNews']}>

    <div className={styles['cardNewsImg']}>
        <img src={cardPic} className={styles['cardPic']} alt="CardPic"/>
    </div>

    <div className={styles['cardNesInfo']}>
        <h3>Отхвърлиха ветото на президента</h3>
        <p className={styles['publicDate']}>10 Ноември / Политика</p>
        <p className={styles['firstrow']}>
            Парламентът отхвърли ветото на президента върху закона за енергетиката...
        </p>
    </div>

</div>

<div className= {styles['cardNews']}>

    <div className={styles['cardNewsImg']}>
        <img src={cardPic2} className={styles['cardPic2']} alt="CardPic"/>
    </div>

    <div className={styles['cardNesInfo']}>
        <h3>Парите на държавата: БЮДЖЕТ 2024</h3>
        <p className={styles['publicDate']} >10 Ноември / Икономика</p>
        <p className={styles['firstrow']}>
            Министър Василев представи параметрите на държавния бюджет...
        </p>
    </div>

</div>


<div className= {styles['cardNews']}>

    <div className={styles['cardNewsImg']}>
        <img src={cardPic3} className={styles['cardPic3']} alt="CardPic"/>
    </div>

    <div className={styles['cardNesInfo']}>
        <h3>Време за бира</h3>
        <p className={styles['publicDate']} >10 Ноември / Любипитно</p>
        <p className={styles['firstrow']}>
            Доказано е, че глобалното затопляне влияе на бирата...
        </p>
    </div>

</div>

</div>
</>
    )
}
