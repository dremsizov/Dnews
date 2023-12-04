import * as newsService from "../../../services/newsService";
import styles from '../AllNews/AllNews.module.css'


import { useState, useEffect } from "react";
import NewsItem from "../../NewsItemCards/NewsCardCatalog/NewsItem";


export default function AllNews() {
    document.title = 'Всички новини';

    const [allNews,setAllNews] = useState([]);


    useEffect(() => {
        newsService.getAll()
       .then(result =>setAllNews(result))
       .catch(error => console.log(error));

    }, []);

    const reversedNews = [...allNews].reverse();

    return(
        <>
        <div className={styles.catalogContainer}>

      <h2> Следи новините! Всеки час, за да знаеш, за да си информиран, за да си независим!</h2>
     
        <div>
            {reversedNews.map(newscard =>(
                <NewsItem 
                {...newscard}
                />
                ))}
        </div>
                </div>
            </>
        
        
        
    
    );
}