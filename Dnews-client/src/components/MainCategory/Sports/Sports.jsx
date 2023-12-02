import styles from "../Sports/Sports.module.css"

import { useEffect, useState } from 'react';
import * as newsService from '../../../services/newsService'


import NewsCard from '../../NewsItem/NewsItem';


export default function SportsNews(){

    const [sports, setSportsNews] = useState([]);
    
    useEffect(() => {
        newsService.getAllSports()
        .then(result => setSportsNews(result))
        .catch(err => console.log(err))
    }, 
    [])

    return(
        <>
        <div className={styles.title}>

        <h2>В ритъма на спортните новини</h2>

            <div>
                {sports.length > 0
                ? (
                    <>
                    {
                        sports.map(newsCard => (
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