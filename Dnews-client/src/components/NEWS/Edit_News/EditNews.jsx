import { useEffect, useState } from "react";
import styles from "../Edit_News/EditNews.module.css";

import Modal from "react-modal";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as newsService from "../../../services/newsService";

Modal.setAppElement("#root");

const formEditInitialState = {
  title: "",
  newsInfo: "",
  image: "",
  category: "", 
};

export default function EditNews() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const {newsID} = useParams();
  const [formEditValues, setFormEditValues] = useState(
    formEditInitialState
  );
  const [errors, setErrors] = useState({});


    useEffect(()=> {
        newsService.getOneNews(newsID)
        .then(result=>setFormEditValues(result))
        .catch(err => console.log(err));
    }, [newsID])


  // const handleChange = (e) => {
  //   let value = "";
  //   if(e.target.category){
  //       value=e.target.value;
  //   }
  //   setFormEditValues((state) => ({
  //     ...state,
  //     [e.target.name]: value,
  //   }));
  // };

  const handleChange = (e) => {
    let value = "";
    if (e.target.type === "radio" || e.target.type === "text" || e.target.type === "textarea") {
        value = e.target.value;
    }
    setFormEditValues((state) => ({
        ...state,
        [e.target.name]: value,
    }));
};



  const resetCreateFormHandler = () => {
    setFormEditValues(formEditInitialState);
    setErrors({});
  };

  const formCreateSubmitHandler = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  //   Create NEWS /////////////

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleCreateConfirmation = () => {
    newsService
      .editNews(newsID,formEditValues)
      .then(() => {
        setIsModalOpen(false);
        navigate("/news");
      })

      .catch((error) => console.log(error));

    resetCreateFormHandler();
  };

  // validatorssss////////////////

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fornContainer}>


        <form id="request" className={styles.form} onSubmit={formCreateSubmitHandler}>
          <label htmlFor="title" className={styles.titleText1} >
            {" "}
            Заглавие:
            <input
            className={styles.titleText}
              type="text"
              name="title"
              id="title"
              value={formEditValues.title}
              onChange={handleChange}
            />
          </label>
          <br />

          <label htmlFor="newsInfo" className={styles.newsInfo}>
            Описание на новината:
            <textarea
            className={styles.newsInfoTextArea}
              type="text"
              name="newsInfo"
              id="newsInfo"
              value={formEditValues.newsInfo}
              onChange={handleChange}
            />
          </label>
          <br />

          <label htmlFor="image">
            Добавяне на снимка чрез линк:
            <input
              type="text"
              name="image"
              id="image"
              value={formEditValues.image}
              onChange={handleChange}
            />
          </label>
          <br />

          <fieldset>
            <legend>Избери категория:</legend>
            <div className={styles.categoryOptions}>
              <div className={styles.itemOptions}>
                <label htmlFor="bg">
                  <input
                    type="radio"
                    name="category"
                    value="България"
                    id="bg"
                    checked={formEditValues.category === "България"}
                    onChange={handleChange}
                  />
                  България
                </label>
              </div>

              <div className={styles.itemOptions}>
                <label htmlFor="world">
                  <input
                    type="radio"
                    name="category"
                    value="Свят"
                    id="world"
                    checked={formEditValues.category === "Свят"}
                    onChange={handleChange}
                  />
                  Свят
                </label>
              </div>

              <div className={styles.itemOptions}>
                <label htmlFor="politics">
                  <input
                    type="radio"
                    name="category"
                    value="Политика"
                    id="politics"
                    checked={formEditValues.category === "Политика"}
                    onChange={handleChange}
                  />
                  Политика
                </label>
              </div>

              <div className={styles.itemOptions}>
                <label htmlFor="economy">
                  <input
                    type="radio"
                    name="category"
                    value="Икономика"
                    id="economy"
                    checked={formEditValues.category === "Икономика"}
                    onChange={handleChange}
                  />
                  Икономика
                </label>
              </div>

              <div className={styles.itemOptions}>
                <label htmlFor="sport">
                  <input
                    type="radio"
                    name="category"
                    value="Спорт"
                    id="sport"
                    checked={formEditValues.category === "Спорт"}
                    onChange={handleChange}
                  />
                  Спорт
                </label>
              </div>

              <div className={styles.itemOptions}>
                <label htmlFor="lifestyle">
                  <input
                    type="radio"
                    name="category"
                    value="Любопитно"
                    id="lifestyle"
                    checked={formEditValues.category === "Любопитно"}
                    onChange={handleChange}
                  />
                  Любопитно
                </label>
              </div>

              <div className={styles.itemOptions}>
                <label htmlFor="analitic">
                  <input
                    type="radio"
                    name="category"
                    value="Анализи"
                    id="analitic"
                    checked={formEditValues.category === "Анализи"}
                    onChange={handleChange}
                  />
                  Анализи
                </label>
              </div>
            </div>
          </fieldset>

          <br />
          <div className={styles.buttons}>
            <button
              className={styles.createBtnYes}
              type="submit"
              disabled={
                Object.values(errors).some((x) => x) ||
                Object.values(formEditValues).some((x) => x == "")
              }
            >
              Създай
            </button>
            <Link to="/">
              <button className={styles.cancelBtnNo} type="button">
                Отказ
              </button>
            </Link>
          </div>
        </form>
        </div>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleModalClose}
          contentLabel="Create Confirmation Modal"
          className={styles.modal}
          overlayClassName={styles.overlay}
        >
          <p>Сигурни ли сте, че искате да публикувате новината?</p>
          
          <div className={styles.modalbTN}> 


          <button className={styles.yes}
            type="submit"
            disabled={
              Object.values(errors).some((x) => x) ||
              Object.values(formEditValues).some((x) => x == "")
            }
            onClick={handleCreateConfirmation}
            >
            Да
          </button>
          <button className={styles.no} onClick={handleModalClose}>Не</button>
              </div>
        </Modal>
      </div>
    </>
  );
}
