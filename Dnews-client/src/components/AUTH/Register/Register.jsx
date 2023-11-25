import styles from "../../AUTH/Register/Register.module.css";
import { useNavigate } from 'react-router-dom';
import { useState, useContext,useEffect,useRef } from "react";

import { AuthContext } from "../../../contexts/AuthContext";
import * as authApi from '../../../services/userService'

const regFormInitialState = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
  repass: "",
  // userOprion: "",
};

export default function Register() {
  const navigate = useNavigate();

  const {auth, setAuth} = useContext(AuthContext);

  const isMountedRef = useRef(false)

  const [formRegValues, setFormRegValues] = useState(regFormInitialState);
  const [errors, setErrors] = useState({});

  const [hasServerError, setHasServerError] = useState(false);
  const [serverError, setServerError] = useState({});


  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }

    console.log('Формулярът е актуализиран');
  }, [formRegValues]);


  const changeHandler = (e) => {
    setFormRegValues(state => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };



  const resetRegFormHandler = () => {
    setFormRegValues(regFormInitialState);
    setErrors({})
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formRegValues);

    authApi.register(formRegValues)
    .then(user => {
      setAuth(user)
      navigate('/news')
      })
      .catch(error => {
        setHasServerError(true);
        setServerError(error.message);
      })


    resetRegFormHandler();
  };

  /////////////////////////////////////////////////////// FIRST NAME VALIDATOR  //////////////////////////////////////////////////////

  const firstNameValidator = () => {
    if (formRegValues.firstName.length < 2) {
      setErrors(state => ({
        ...state,
        firstName: "Собственото име трябва да е повече от 2 символа!",
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



  ///////////////////////////////////////////// LASTNAME VALIDATOR ////////////////////////////////////////////////////////

  const lastNameValidator = () => {
    if (formRegValues.lastName.length < 2) {
      setErrors(state => ({
        ...state,
        lastName: "Фамилията име трябва да е повече от 2 символа!",
      }));
    } else {
      if (errors.lastName) {
        setErrors(state => ({
          ...state,
          lastName: "",
        }));
      }
    }
  };

    ////////////////////////////// USERNAME VALIDATOR //////////////////////////////////////////////////////

    const userNameValidator = () => {
      if (formRegValues.username.length < 4) {
        setErrors(state => ({
          ...state,
          username: "Потребителското име трябва да е повече от 4 символа!",
        }));
      } else {
        if (errors.username) {
          setErrors(state => ({
            ...state,
            username: "",
          }));
        }
      }
    };
    

    ////////////////////////// PASSWORD VALIDATOR //////////////////////////////////////////////////////

    const passwordValidator = () => {
      if(formRegValues.password.length<6){
        setErrors(state => ({
          ...state,
          password: 'Вашата парола трябва да бъде минимум 6 символа!'
        }));
      } else{
        if(errors.password){
          setErrors(state => ({
            ...state,
            password: ''
          }));
        }
      }
    }


    /////////////////////////////////// REPASS VALIDATOR //////////////////////////////////////////////////////

    const repassValidator = () => {
      if(formRegValues.password != formRegValues.repass) {
        setErrors(state => ({
          ...state,
          repass: 'Посочената парола не съвпада!'
        }));
      } else{
        if(errors.repass){
          setErrors(state =>({
            ...state,
            repass: ''
          }))
        }
      }
    }

    // /////////////////////////////////// EMAIl Validator //////////////////////////

    function emailIsValid(email){
      const regexEmail = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/;
      return regexEmail.test(email)
    }

    const emailValidator = () => {
      if(!emailIsValid(formRegValues.email)){
        setErrors(state => ({
          ...state,
          email: 'Посоченият от вас мейл адрес не е във валиден формат',
        }))
      }
      else{
        if(errors.email) {
          setErrors(state => ({
            ...state,
            email: ''
          }));
        }
      }

    }

  return (
    <>
      <section className={styles["regForm"]}>
        <div className={styles["wrapper"]}>
          <form method='POST' onSubmit={formSubmitHandler}>
           
            <h2  className={styles["title"]}>Регистрация</h2>

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
                  onBlur={lastNameValidator}
                  required
                  className={errors.lastName && styles.errorInput}
                />
                {errors.lastName && (
                  <p className={styles.errorMessage}>{errors.lastName}</p>
                )}
              </div>

              <div className={styles["inputBox"]}>
                <label htmlFor="email">Имейл</label>
                <input
                  type="email"
                  placeholder="въведете валиден имейл"
                  name="email"
                  value={formRegValues.email}
                  onChange={changeHandler}
                  onBlur={emailValidator}
                  id="email"
                  required
                  
                />
                 {errors.email && (
                  <p className={styles.errorMessage}>{errors.email}</p>
                )}


              </div>

              <div className={styles["inputBox"]}>
                <label htmlFor="username">Потребителско име</label>
                <input
                  type="text"
                  placeholder="потребителско име"
                  name="username"
                  value={formRegValues.username}
                  onChange={changeHandler}
                  onBlur={userNameValidator}
                  id="username"
                  required
                  className={errors.username && styles.errorInput}
                />
                  {errors.username && (
                  <p className={styles.errorMessage}>{errors.username}</p>
                )}
              </div>

              <div className={styles["inputBox"]}>
                <label htmlFor="password">Парола</label>
                <input
                  type="password"
                  placeholder="парола"
                  name="password"
                  value={formRegValues.password}
                  onChange={changeHandler}
                  onBlur={passwordValidator}
                  id="password"
                  required
                  className={errors.password && styles.errorInput}
                />
               {errors.password && (
                  <p className={styles.errorMessage}>{errors.password}</p>
                )}
              </div>

              <div className={styles["inputBox"]}>
                <label htmlFor="repass">Повтори своята парола</label>
                <input
                  type="password"
                  placeholder="парола"
                  name="repass"
                  value={formRegValues.repass}
                  onChange={changeHandler}
                  onBlur={repassValidator}
                  id="repass"
                  required
                  className={errors.repass && styles.errorInput}
                />
                {errors.repass && (
                  <p className={styles.errorMessage}>{errors.repass}</p>
                )}
              </div>

{/* USERS Options */}
              {/* <div className={styles["userOption"]}>
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
              </div> */}

              <div className={styles["regBtn-container"]}>
                
                <button type="submit"
                    disabled={(Object.values(errors).some(x => x)
                      || (Object.values(formRegValues).some(x => x == '')))}>
                  Регистрирай се
                </button>

                {hasServerError && (
                    <p className={styles.serverError}>{serverError}</p>
                  )}

              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
