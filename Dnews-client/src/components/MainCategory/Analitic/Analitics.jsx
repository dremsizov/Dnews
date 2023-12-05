import styles from '../Analitic/Analitic.module.css';
import { useEffect, useState } from 'react';
import * as newsService from '../../../services/newsService'
import { Link } from 'react-router-dom';


import NewsCard from "../../NewsItemCards/NewsCardCatalog/NewsItem";


export default function AnaliticsNews(){
    document.title = 'Анализи';

    const [analitics, setAnalitics] = useState([]);
    
    useEffect(() => {
        newsService.getAllAnalitics()
        .then(result => setAnalitics(result))
        .catch(err => console.log(err))
    }, 
    [])

    return(
        <>
        <div className={styles.title}>

        <h2>Твоето място за анализи и коментари!</h2>

            <div>
                {analitics.length > 0
                ? (
                    <>
                    {
                        analitics.map(newsCard => (
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