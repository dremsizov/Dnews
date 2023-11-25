import styles from '../NewsItem/NewsItem.module.css'
import formatData from '../utils/formatDataUtils'

export default function NewsItem({
    title,
    newsInfo,
    type,
    image,
    _createdOn,

}){
    return (

        <>
       <div className={styles['wrapper']}>


        <article className={styles['artCard']}>
            <div className={styles['newsCardT']}>

        <img src={image} alt="" />
        <div className={styles['newsInfo']}>
            <h3>{title}</h3>
            <p className={styles['newsDate']}>{formatData(_createdOn)}</p>
            <p className={styles['newsText']}>{newsInfo}</p>
        </div>
            </div>
        </article>

  
       </div>
        </>
    )
}