import styles from "../Bulgaria/Bulgaria.module.css"

import { useEffect, useState } from 'react';
import * as newsService from '../../../services/newsService'


import NewsCard from "../../NewsItemCards/NewsCardCatalog/NewsItem";


export default function BulgariaNews(){

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
                            <NewsCard
                                {...newsCard}
                                />


                        ))
                    }
                    </>
                )
                :
                <h3> Нямаме новини от България</h3>
}
            </div>
        </div>
        </>
    )
}