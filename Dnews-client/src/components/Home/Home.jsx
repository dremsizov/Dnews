import styles from "../Home/HomePage.module.css";

import * as newsService from "../../services/newsService";
import { useState, useEffect } from "react";

import HomeNewsCard from "./HomeNewsCard";


export default function Home() {
  const [newsSeven, setNews] = useState([]);

  useEffect(() => {
    newsService
      .getLastSevenNews()
      .then((result) => setNews(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className={styles.newsContainer}>
        {newsSeven.map((newscard) => (
          <HomeNewsCard key={newscard._id} {...newscard} />
        ))}
      </div>
    </>
  );
}
