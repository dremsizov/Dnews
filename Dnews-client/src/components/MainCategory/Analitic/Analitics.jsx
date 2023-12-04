import styles from '../Analitic/Analitic.module.css';
import { useEffect, useState } from 'react';
import * as newsService from '../../../services/newsService'


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
                            <NewsCard
                                {...newsCard}
                                />


                        ))
                    }
                    </>
                )
                :
                <h3> Още никой не е направил своя анализ!</h3>
}
            </div>
        </div>
        </>
    )
}