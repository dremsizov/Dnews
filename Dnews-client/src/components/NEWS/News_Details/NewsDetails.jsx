import styles from "../News_Details/NewsDetails.module.css";
import { useEffect, useState, useContext, useReducer } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

import * as newsService from "../../../services/newsService";
import * as commentsService from '../../../services/commentsService'

import { AuthContext } from "../../../contexts/AuthContext";

import reducer from "./commentReducer"

import NewsCard from "../../NewsItem/NewsItem"

import formatData from "../../utils/formatDataUtils";
import DeleteNews from "../DeleteNews/DeleteNews";
import useForm from "../../../Hooks/useForm";

import Modal from "react-modal"; 


export default function NewsDetails() {

  document.title = 'Details';

const navigate = useNavigate();

const [newsTree, setNews] = useState([]);

  const { auth } = useContext(AuthContext);
  const { newsID } = useParams();
  const [deleteBtn, setDeleteBtn] = useState(false);
  const [comments, dispatch] = useReducer(reducer, []);

  const [newsDetails, setNewsDetails] = useState({});

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    newsService
      .getOneNews(newsID)
      .then((result) => setNewsDetails(result))
      .catch((err) => console.log(err));

      newsService
      .getLastTreeNews()
      .then((result) => setNews(result))
      .catch((err) => console.log(err));

      commentsService.getAll(newsID)
      .then((result) => {
          dispatch({
              type: 'GET_ALL_COMMENTS',
              payload: result,
          });
      });
  }, [newsID, auth]);

  const addCommentHandler = async (values) => {
    const newComment = await commentsService.create(
        newsID,
        values.comment
    );

    newComment.owner = { auth };

    dispatch({
        type: 'ADD_COMMENT',
        payload: newComment
    })
}

  // const deleteHandler = () => {
  //   setDeleteBtn(true);
  // };

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

  const { values, changeHandler, submitHandler } = useForm(addCommentHandler, {
    comment: '',
});

const openModal = () => {
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
};

  return (
    
    <div className="bigWrapper"> 
      
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
        <div className={styles.imageContainer}>
        <img src={newsDetails.image} alt="" />
      </div>

        <div className={styles.newsInfo}>
          <p className={styles.firstPart}>{newsDetails.newsInfo}</p>
          <p className={styles.secondPart}>{newsDetails.fullInfo}</p>
        </div>
      </div>
      <div className={styles.imagBtnContainer}>
      

      {isNewsOwner && (
        <>
          <button className={styles.editBtn}>
            <Link to={`/edit/${newsID}`}>Редактирай</Link>
          </button>
          <button className={styles.deteleBtn} type="submit" onClick={openModal} >
            Изтрий новината
          </button>

          <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={submitHandler}>
                    <textarea name="comment" value={values.comment} onChange={changeHandler} placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
        </>
      )}

 <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Delete Confirmation Modal"
          className={styles.modal}
          overlayClassName={styles.overlay}
        >
          <p>Сигурни ли сте, че искате да изтриете новината?</p>
          
          <div className={styles.modalbTN}> 


          <button className={styles.yes}
            type="button"
        
            onClick={onDeleteNews}
            >
            Да
          </button>
          <button className={styles.no} onClick={closeModal}>Не</button>
              </div>
        </Modal> 
 


      

      </div>
   
    </div>

    <div className="lastTreeWrapper">
              <h2>Нашите послени новини </h2>
            </div>
            {newsTree.map(newsCard =>(
              <NewsCard
              {...newsCard}
              />
            ))}
       </div>
    
  );
}
