import styles from '../Analitic/Analitic.module.css';
import { useEffect, useState } from 'react';
import * as newsService from '../../../services/newsService'


import NewsItem from '../../NewsItem/NewsItem';


export default function Analitics(){

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
                        analitics.map(news => (
                            <NewsItem
                                key={news._id}
                                _id={news._id}
                                category={news.category}
                                title={news.title}
                                newsInfo ={news.newsInfo}
                                image={news.image}
                                _createdOn={news._createdOn}
                                />


                        ))
                    }
                    </>
                )
                :
                <h3> Никой не е направил Анализи още</h3>
}
            </div>
        </div>
        </>
    )
}