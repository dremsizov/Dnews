import { useState } from "react";
import styles from "../Register/Register.module.css";

const regFormInitialState = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
  repass: "",
  userOprion: "",
};

export default function Register() {
  const [formRegValues, setFormRegValues] = useState(regFormInitialState);
  const [errors, setErrors] = useState({});

  const changeHandler = (e) => {
    setFormRegValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const resetRegRormHandler = () => {
    setFormRegValues(regFormInitialState);
  };

  const formSubmitHandler = () => {
    console.log(formRegValues);
    resetRegRormHandler();
  };

  const firstNameValidator = () => {
    if (formRegValues.firstName.length < 2) {
      setErrors(state => ({
        ...state,
        firstName: "Собственото име трябва да е повече от 2 символа",
      }));
    } else {
      if (errors.firstName) {
        setErrors(state => ({
          ...state,
          firstName: "",
        }));
      }
    }
  };

  return (
    <>
      <section className={styles["regForm"]}>
        <div className={styles["wrapper"]}>
          <form>
            <h2 className={styles["title"]}>Регистрация</h2>

            <div className={styles["regContent"]}>
              <div className={styles["inputBox"]}>
                <label htmlFor="firstName">Собствено име</label>
                <input
                  type="text"
                  placeholder="собствено име"
                  name="firstName"
                  id="firstName"
                  value={formRegValues.firstName}
                  onChange={changeHandler}
                  onBlur={firstNameValidator}
                  required
                  className={errors.firstName && styles.errorInput}
                />
                {errors.firstName && (
                  <p className={styles.errorMessage}>{errors.firstName}</p>
                )}
              </div>

              <div className={styles["inputBox"]}>
                <label htmlFor="lastName">Фамилия</label>
                <input
                  type="text"
                  placeholder="фамилия"
                  name="lastName"
                  id="lastName"
                  value={formRegValues.lastName}
                  onChange={changeHandler}
                  required
                />
              </div>

              <div className={styles["inputBox"]}>
                <label htmlFor="email">Имейл</label>
                <input
                  type="email"
                  placeholder="въведете валиден имейл"
                  name="email"
                  value={formRegValues.email}
                  onChange={changeHandler}
                  id="email"
                  required
                />
              </div>

              <div className={styles["inputBox"]}>
                <label htmlFor="username">Потребителско име</label>
                <input
                  type="text"
                  placeholder="потребителско име"
                  name="username"
                  value={formRegValues.username}
                  onChange={changeHandler}
                  id="username"
                  required
                />
              </div>

              <div className={styles["inputBox"]}>
                <label htmlFor="password">Парола</label>
                <input
                  type="password"
                  placeholder="парола"
                  name="password"
                  value={formRegValues.password}
                  onChange={changeHandler}
                  id="password"
                  required
                />
              </div>

              <div className={styles["inputBox"]}>
                <label htmlFor="repass">Повтори своята парола</label>
                <input
                  type="password"
                  placeholder="парола"
                  name="repass"
                  value={formRegValues.repass}
                  onChange={changeHandler}
                  id="repass"
                  required
                />
              </div>

              <div className={styles["userOption"]}>
                <label htmlFor="userOption" id="userOption">
                  Потребителски права
                </label>
                <select
                  name="userOption"
                  id="userOprion"
                  onChange={changeHandler}
                  value={formRegValues.userOprion}
                >
                  <option value="empty">Избери права</option>
                  <option value="admin">Администратор</option>
                  <option value="writer">Редактор</option>
                </select>
              </div>

              <div className={styles["regBtn-container"]}>
                {/* <input type="submit" value="Регистрирай се" /> */}
                <button type="button" onClick={formSubmitHandler}>
                  Регистрирай се
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
