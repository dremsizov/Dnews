import styles from "../Bulgaria/Bulgaria.module.css"
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import * as newsService from '../../../services/newsService'


import NewsCard from "../../NewsItemCards/NewsCardCatalog/NewsItem";


export default function BulgariaNews(){
    document.title = 'България';

    const [bgNews, setBgNews] = useState([]);
    
    useEffect(() => {
        newsService.getAllBG()
        .then(result => setBgNews(result))
        .catch(err => console.log(err))
    }, 
    [])

    return(
        <>
        <div className={styles.title}>

        <h2>Новините от България</h2>

            <div>
                {bgNews.length > 0
                ? (
                    <>
                    {
                        bgNews.map(newsCard => (
                            <NewsCard key={newsCard._id}
                                {...newsCard}
                                />


                        ))
                    }
                    </>
                )
                :
                <div className={styles.NoNews}>
                <div className={styles.NoNewsimg}>
                    <img src="../../../public/assets/machine.jpg" />
                </div>
                <div className={styles.NoNewsText}>
                <h3>Все още нямаме новини в тази категория!</h3>
                    <Link to="/createNews">
                <button className={styles.NoNewsBtn}>Създай 
                </button>
                    </Link>
                </div>
                </div>
}
            </div>
        </div>
        </>
    )
}