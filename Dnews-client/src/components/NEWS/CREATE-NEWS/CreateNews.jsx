import { useState } from "react";
import styles from "../CREATE-NEWS/CreateNews.module.css";

import Modal from "react-modal";
import { Link, useNavigate } from "react-router-dom";

import * as newsService from "../../../services/newsService";

Modal.setAppElement("#root");

const formCreateInitialState = {
  title: "",
  newsInfo: "",
  image: "",
  category: "", // Стартова категория
};

export default function CreateNews() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [formCreateValues, setFormCreateValues] = useState(
    formCreateInitialState
  );
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormCreateValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const resetCreateFormHandler = () => {
    setFormCreateValues(formCreateInitialState);
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
      .createNews(formCreateValues)
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
              value={formCreateValues.title}
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
              value={formCreateValues.description}
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
              value={formCreateValues.image}
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
                    checked={formCreateValues.category === "България"}
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
                    checked={formCreateValues.category === "Свят"}
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
                    checked={formCreateValues.category === "Политика"}
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
                    checked={formCreateValues.category === "Икономика"}
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
                    checked={formCreateValues.category === "Спорт"}
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
                    checked={formCreateValues.category === "Любопитно"}
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
                    checked={formCreateValues.category === "Анализи"}
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
                Object.values(formCreateValues).some((x) => x == "")
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
              Object.values(formCreateValues).some((x) => x == "")
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
