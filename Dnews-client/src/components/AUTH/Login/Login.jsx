import { useContext, useState } from "react";
import { Link } from 'react-router-dom'



import useForm from "../../../Hooks/useForm";
import {useNavigate } from 'react-router-dom';

import styles from "../../AUTH/Login/Login.module.css";
import * as userService from "../../../services/userService"
import {AuthContext} from "../../../contexts/AuthContext";

const formInitialData = {
    email: '',
    password: '',
};

export default function Login() {
    const navigate = useNavigate();

    const [seePassword, setSeePassword] = useState(false)
    const {setAuth} = useContext(AuthContext);
    
    const [formValues, setFormValues] = useState(formInitialData)
    const [errors, setErrors] = useState({});


    const resetFormHandler = () => {
      setFormValues(formInitialData);
    };


    const submitHandler = (values) => {
 
      userService.login(values)
        .then(account => {
          setAuth(account);
          navigate('/');
  
          console.log(account);
        })
        .catch((error) => console.log(error.message))
  
      resetFormHandler();
    };



  // const changeHandler = (e) => {
  //   let value = '';
  //   if (e.target.type) {
  //     value = e.target.value;
  //   }

  //   setFormValues(state => ({
  //     ...state,
  //     [e.target.name]: value,
  //   }));
  // };





  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/;
    return emailRegex.test(email);
  }

  const emailValidator = () => {
    if (!validateEmail(values.email)) {
      setErrors(state => ({
        ...state,
        email: 'Посоченият от вас мейл адрес не е във валиден формат',
      }));
    } else {
      if (errors.email) {
        setErrors(state => ({ ...state, email: '' }));
      }
    }
  };

  const passwordValidator = () => {
    if (values.password.length < 6) {
      setErrors(state => ({
        ...state,
        password: 'Паролата трябва да бъде минимум 6 символа!',
      }));
    } else {
      if (errors.password) {
        setErrors(state => ({ ...state, password: '' }));
      }
    }
  };


  const { values, onSubmit, onChange } = useForm(submitHandler, formValues);


  const SeePasswordTogle = () => {
    setSeePassword(!seePassword);
};

  return (
    <>
      <section className={styles["loginForm"]}>
        <div className={styles["wrapper"]}>

          <form id="request" method='POST'
            className={styles["formlog"]}
            onSubmit={onSubmit}
          >
            <h2 className={styles["title"]}>Влез в своя профил</h2>

            <div className={styles["email"]}>
              <div className={styles["emailIntput"]}>
              
              <input
                type="text"
                className={styles.formInput}
                placeholder="мейл"
                name="email"
                id="email"
                required
                onChange={onChange}
                value={values.email}
                onBlur={emailValidator}
              />
              <i className="fa-solid fa-at"></i>
            {errors.email && (
                    <p className={styles.errorMessage}>{errors.email}</p>
                  )}

              </div>
              
             
            </div>

            <div className={styles["pass"]}>
              <div className={styles["passIntput"]}>

              <input
                className={styles.formInput}
                type={seePassword ? 'text' : 'password'}
                id="password"
                placeholder="парола"
                name="password"
                required
                onChange={onChange}
                value={values.password}
                onBlur={passwordValidator}
              />

<div
                                onClick={SeePasswordTogle}
                                className={styles.showHideBtn}>
                                {seePassword ? (
                                  <i className="fa-regular fa-eye"></i>
                                ) : (
                                  <i className="fa-solid fa-eye-slash"></i>
                                )}
                            </div>

{errors.password && (
                    <p className={styles.errorMessage}>{errors.password}</p>
                  )}
              </div>
              
               
              
            </div>

            <div className={styles["signUp"]}>
              <button type="submit"
              
              disabled={(Object.values(errors).some(x => x)
                || (Object.values(values).some(x => x == '')))}
              
             >
              Влез
             </button>

             <div className={styles.loginNav}>
                  <p>
                    Все още нямате регистрация?
                    <Link to='/register'>Кликни тук</Link>
                  </p>
             </div>
               
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
