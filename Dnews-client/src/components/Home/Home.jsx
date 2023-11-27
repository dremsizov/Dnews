import styles from "../Home/HomePage.module.css";

import * as newsService from "../../services/newsService"
import { useState, useEffect } from "react";

import HomeNewsCard from "./HomeNewsCard";

import SliderCard from "../SliderCard/SliderCard";



export default function Home() {


  const [allNews,setAllNews] = useState([]);


    useEffect(() => {
        newsService.getAll()
       .then(result =>setAllNews(result))
       .catch(error => console.log(error));

    }, []);

    const reversedNews = [...allNews].reverse();
    

  return (
    
   
    
    <>
     <div className={styles.newsContainer}>
            {reversedNews.map(newscard =>(
                <SliderCard 
                {...newscard}
                />
                ))}
        </div>

    <div className={styles.newsContainer}>
            {reversedNews.map(newscard =>(
                <HomeNewsCard 
                {...newscard}
                />
                ))}
        </div>
    </>
       
        
      
    
  );
}
