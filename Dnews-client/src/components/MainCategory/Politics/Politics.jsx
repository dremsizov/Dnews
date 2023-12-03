import styles from "../Politics/Politics.module.css"

import { useEffect, useState } from 'react';
import * as newsService from '../../../services/newsService'


import NewsCard from '../../NewsItemCards/NewsItem';


export default function PoliticsNews(){

    const [politics, setPoliticsNews] = useState([]);
    
    useEffect(() => {
        newsService.getAllPolitics()
        .then(result => setPoliticsNews(result))
        .catch(err => console.log(err))
    }, 
    [])

    return(
        <>
        <div className={styles.title}>

        <h2>Политическите новини</h2>

            <div>
                {politics.length > 0
                ? (
                    <>
                    {
                        politics.map(newsCard => (
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