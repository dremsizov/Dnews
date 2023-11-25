import { useContext, useEffect, useRef,useState } from "react";
// import useForm from "../../../Hooks/useForm";
import {useNavigate } from 'react-router-dom';

import styles from "../../AUTH/Login/Login.module.css";
import * as authApi from "../../../services/userService"
import {AuthContext} from "../../../contexts/AuthContext";

const formInitialData = {
    email: '',
    password: '',
};

export default function Login() {
    const navigate = useNavigate();
    const {auth, setAuth} = useContext(AuthContext);
    const isMountedRef = useRef(false);
    const [formValues, setFormValues] = useState(formInitialData)

    const [errors, setErrors] = useState({});
  const [hasServerError, setHasServerError] = useState(false);
  const [serverError, setServerError] = useState({});


  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }

    console.log('Формата е актуализирана');
  }, [formValues]);





  const changeHandler = (e) => {
    let value = '';
    if (e.target.type) {
      value = e.target.value;
    }

    setFormValues(state => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  const resetFormHandler = () => {
    setFormValues(formInitialData);
    setErrors({});
  };

  const submitHandler = (e) => {
    e.preventDefault();

    authApi.login(formValues)
      .then(user => {
        setAuth(user);
        navigate('/');

        console.log(user);
      })
      .catch(error => {
        setHasServerError(true);
        setServerError(error.message);
      });

    resetFormHandler();
  };

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/;
    return emailRegex.test(email);
  }

  const emailValidator = () => {
    if (!validateEmail(formValues.email)) {
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
    if (formValues.password.length < 6) {
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




  return (
    <>
      <section className={styles["loginForm"]}>
        <div className={styles["wrapper"]}>
          <form id="request" method='POST'
            className={styles["formlog"]}
            onSubmit={submitHandler}
          >
            <h2 className={styles["title"]}>Влез в своя профил</h2>

            <div className={styles["email"]}>
              <input
                type="text"
                placeholder="email"
                name="email"
                id="email"
                required
                onChange={changeHandler}
                value={formValues.email}
                onBlur={emailValidator}
              />
                {errors.email && (
                    <p className={styles.errorMessage}>{errors.email}</p>
                  )}
              <i className="fa-solid fa-at"></i>
            </div>

            <div className={styles["pass"]}>
              <input
                type="password"
                id="password"
                placeholder="password"
                name="password"
                required
                onChange={changeHandler}
                value={formValues.password}
                onBlur={passwordValidator}
              />
               {errors.password && (
                    <p className={styles.errorMessage}>{errors.password}</p>
                  )}
              <i className="fa-solid fa-key"></i>
            </div>

            <div className={styles["signUp"]}>
              <input type="submit"
              
              disabled={(Object.values(errors).some(x => x))
                || (formValues.email == '' || formValues.password == '')}
              
              value={"Влез в профила си"} />
               {hasServerError && (
                    <p className={styles.serverError}>{serverError}</p>
                  )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
