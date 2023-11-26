import styles from "../News_Details/NewsDetails.module.css";
import { useEffect, useState, useContext } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

import * as newsService from "../../../services/newsService";

import { AuthContext } from "../../../contexts/AuthContext";
import formatData from "../../utils/formatDataUtils";
import DeleteNews from "../DeleteNews/DeleteNews";

export default function NewsDetails() {

document.title = 'Details';

  const navigate = useNavigate();

  const { auth } = useContext(AuthContext);
  const { newsID } = useParams();
  const [deleteBtn, setDeleteBtn] = useState(false);

  const [newsDetails, setNewsDetails] = useState({});

  useEffect(() => {
    newsService
      .getOneNews(newsID)
      .then((result) => setNewsDetails(result))
      .catch((err) => console.log(err));
  }, [newsID, auth]);

  const deleteHandler = () => {
    setDeleteBtn(true);
  };

  const onDeleteNews = (e) => {
    e.preventDefault();
    setDeleteBtn(false);

    newsService.removeNews(newsID)
      .then(() => navigate("/news"))
      .catch((err) => console.log(err));
  };

  let isNewsOwner = false;

  if (auth) {
    if (newsDetails._ownerId === auth._id) {
      isNewsOwner = true;
    } else {
      console.log("test");
    }
  }
  return (
    <div className={styles.newsContainer}>
      {deleteBtn && (
        <DeleteNews
          onClose={() => setDeleteBtn(false)}
          onDeleteNews={onDeleteNews}
        />
      )}

      <div className={styles.textContainer}>
        <h2>{newsDetails.title}</h2>
        <div className={styles.metadata}>
          <p>{newsDetails.category}</p>
          <p>{formatData(newsDetails._createdOn)}</p>
        </div>
        <div className={styles.newsInfo}>
          <p className={styles.firstPart}>{newsDetails.newsInfo}</p>
          <p className={styles.secondPart}>{newsDetails.fullInfo}</p>
        </div>
      </div>
      <div className={styles.imagBtnContainer}>
      <div className={styles.imageContainer}>
        <img src={newsDetails.image} alt="" />
      </div>

      {isNewsOwner && (
        <>
          <button className={styles.editBtn}>
            <Link to={`/edit/${newsID}`}>Редактирай</Link>
          </button>
          <button className={styles.deteleBtn} type="submit" onClick={deleteHandler}>
            Изтрий новината
          </button>
        </>
      )}
      </div>
   
    </div>
  );
}
