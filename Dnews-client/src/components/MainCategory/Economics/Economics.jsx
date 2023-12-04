import styles from "../Economics/Economics.module.css"

import { useEffect, useState } from 'react';
import * as newsService from '../../../services/newsService'


import NewsCard from "../../NewsItemCards/NewsCardCatalog/NewsItem";


export default function EconomicsNews(){
    document.title = 'Икономика';

    const [economics, setEconomicsNews] = useState([]);
    
    useEffect(() => {
        newsService.getAllEconomics()
        .then(result => setEconomicsNews(result))
        .catch(err => console.log(err))
    }, 
    [])

    return(
        <>
        <div className={styles.title}>

        <h2>Всичко от света на икономиката</h2>

            <div>
                {economics.length > 0
                ? (
                    <>
                    {
                        economics.map(newsCard => (
                            <NewsCard
                                {...newsCard}
                                />


                        ))
                    }
                    </>
                )
                :
                <h3> Нямаме икономически новини</h3>
}
            </div>
        </div>
        </>
    )
}