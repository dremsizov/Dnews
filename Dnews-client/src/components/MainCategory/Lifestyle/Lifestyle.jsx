import styles from "../Lifestyle/Lifestyle.module.css"
import { Link } from "react-router-dom";

import { useEffect, useState } from 'react';
import * as newsService from '../../../services/newsService'


import NewsCard from "../../NewsItemCards/NewsCardCatalog/NewsItem";

export default function LifeStyleNews(){
    document.title = 'Любопитно';

    const [lifeStyle, setLifeStyleNews] = useState([]);
    
    useEffect(() => {
        newsService.getAllLifeStyles()
        .then(result => setLifeStyleNews(result))
        .catch(err => console.log(err))
    }, 
    [])

    return(
        <>
        <div className={styles.title}>

        <h2>Всичко любипитно, което те заобикаля</h2>

            <div>
                {lifeStyle.length > 0
                ? (
                    <>
                    {
                        lifeStyle.map(newsCard => (
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