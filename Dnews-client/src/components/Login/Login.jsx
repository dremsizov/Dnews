import { useContext } from 'react';
import useForm from '../../Hooks/useForm';



import styles from '../Login/Login.module.css'
import AuthContext from '../../contexts/authContext';

export default function Login() {

        const { loginSubmitHandler} = useContext(AuthContext)

    const {values, changeHandler, submitHandler } = useForm(loginSubmitHandler, {
        email: '',
        password: '',
    });


    return (
        <>

        <section className={styles['loginForm']}>

            <div className={styles['wrapper']}>
            
            <form className={styles['formlog']} action=""  onSubmit={submitHandler}>
                <h2 className={styles['title']}>Влез в своя профил</h2>

                <div className={styles['email']}>
                    <input type="text" placeholder='email' name="email"required 
                    onChange={changeHandler}
                    value = {values.email}/>
                    <i className="fa-solid fa-at"></i>
                </div>

                <div className={styles['pass']}>
                    <input type="password" placeholder='password' name='password' required 
                    onChange={changeHandler}
                    value = {values.password}/>
                    <i className="fa-solid fa-key"></i>
                 </div>

               
                 <div className={styles['signUp']}>
                    <input type="submit" value={'Влез в профила си'}/>
                 </div>

               
               
            
            </form>


            </div>
        
        </section>

        
        
       
        
        </>
    );

}