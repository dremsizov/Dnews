import styles from "../Sports/Sports.module.css"
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as newsService from '../../../services/newsService'


import NewsCard from "../../NewsItemCards/NewsCardCatalog/NewsItem";


export default function SportsNews(){
    document.title = 'Спорт';
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