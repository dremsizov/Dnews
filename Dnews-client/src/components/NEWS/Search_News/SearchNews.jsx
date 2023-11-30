import styles from "../Search_News/SearchNews.module.css"
import { useEffect, useState } from "react"

import * as newsService from "../../../services/newsService";

import NewsItem from "../../NewsItem/NewsItem"

const initialSearchVaelue = {
    search: "",
}

export default function SearchNews() {
    const [news, setNews] = useState([]);
    const[searchValue, setSearchValue] = useState(initialSearchVaelue);

        useEffect(() =>{
            newsService.getAll()
            .then(resutl => setNews(resutl.filter(news=>news.newsInfo
                .toLowerCase()
                .includes(searchValue.search.toLowerCase()))))
                .catch(err => console.log(err))
            
        }, [searchValue]);

        const onChangeHandler = (e) => {
            let value = '';
            if (e.target.type) {
                value = e.target.value;
            }
    
            setSearchValue(state => ({
                ...state,
                [e.target.name]: value,
            }));

        }


    return(
<>

        <div className={styles.searchContainer}>
            <form action="POST">

            <h1> Намери своята новина</h1>
        <input type="text" name="search" value={searchValue.search} className={styles.searchInput} placeholder="Enter your search..."
        onChange={onChangeHandler} />
            </form>

                <div>
                    {news.length > 0
                    ?(
                        <>
                        {news.map(newsCard => (
                            <NewsItem
                            {...newsCard}
                            />
                        ))}
                        </>
                    )
                :
            <div>
                <p>  Няма</p>
                </div>
                }
                </div>
     
        </div>
</>

    );
}