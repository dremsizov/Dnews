import styles from "../Lifestyle/Lifestyle.module.css"

import { useEffect, useState } from 'react';
import * as newsService from '../../../services/newsService'


import NewsCard from '../../NewsItemCards/NewsItem';


export default function LifeStyleNews(){

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
                            <NewsCard
                                {...newsCard}
                                />


                        ))
                    }
                    </>
                )
                :
                <h3>Все още нямаме новини в тази категория!</h3>
}
            </div>
        </div>
        </>
    )
}