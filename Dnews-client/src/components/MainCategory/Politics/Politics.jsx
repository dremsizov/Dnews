import styles from '../Politics/Politics.module.css'

export default function Politics(){
    return (
        <>
       <div className={styles['wrapper']}>


        <article className={styles['artCard']}>
            <div className={styles['newsCardT']}>

        <img src="./assets/asenVasilev.jpg" alt="" />
        <div className={styles['newsInfo']}>
            <h3>Вот на недоверие</h3>
            <p className={styles['newsDate']}>15 Ноември</p>
            <p className={styles['newsText']}>Повече от 4 часа депутатите обсъждаха внесеният от опозицията вот на недоверие</p>
        </div>
            </div>
        </article>

        <article className={styles['artCard']}>
        <div className={styles['newsCardT']}>
        <img src="./assets/beer.jpg" alt="" />
        <div className={styles['newsInfo']}>
            <h3>Вот на недоверие</h3>
            <p className={styles['newsDate']}></p>
            <p className={styles['newsText']}></p>
        </div>
        </div>
        </article>

        <article className={styles['artCard']}>
        <div className={styles['newsCardT']}>
        <img src="./assets/ns.jpg" alt="" />
        <div className={styles['newsInfo']}>
            <h3>Вот на недоверие</h3>
            <p className={styles['newsDate']}></p>
            <p className={styles['newsText']}></p>
        </div>
        </div>
        </article>


       </div>
        </>
    )
}