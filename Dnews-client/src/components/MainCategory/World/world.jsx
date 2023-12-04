import styles from "../Sports/Sports.module.css"

import { useEffect, useState } from 'react';
import * as newsService from '../../../services/newsService'


import NewsCard from "../../NewsItemCards/NewsCardCatalog/NewsItem";


export default function WorldNews(){
    document.title = 'Свят';
    const [worlds, setWorldsNews] = useState([]);
    
    useEffect(() => {
        newsService.getAllWorld()
        .then(result => setWorldsNews(result))
        .catch(err => console.log(err))
    }, 
    [])

    return(
        <>
        <div className={styles.title}>

        <h2> Новини - свят</h2>

            <div>
                {worlds.length > 0
                ? (
                    <>
                    {
                        worlds.map(newsCard => (
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