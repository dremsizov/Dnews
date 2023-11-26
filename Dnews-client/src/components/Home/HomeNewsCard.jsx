import { Link } from 'react-router-dom'
import styles from '../Home/HomeNewsCard.module.css/'
import formatData from '../utils/formatDataUtils'

export default function HomeNewsCard({
    title,
    newsInfo,
    image,
    _createdOn,
    category,
    _id

}) {
    return(

        <>

<article className={styles["newsCard"]}>
  <div className={styles["cardNewsImg"]}>
  <img
    src={image}
    className={styles["cardPic2"]}
    alt="CardPic"
  />
</div>
<div className={styles["cardNesInfo"]}>
  <h3>{title}</h3>
  <p className={styles["publicDate"]}>{formatData(_createdOn)}/ {category}</p>
  <p className={styles["firstrow"]}>
    {newsInfo}
  </p>
   
  
</div>
</article>
       </>
    )
}
