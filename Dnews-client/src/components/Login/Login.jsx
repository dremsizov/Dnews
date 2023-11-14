import styles from '../Login/Login.module.css'

export default function Login() {


    return (
        <>

        <section className={styles['loginForm']}>

            <div className={styles['wrapper']}>
            
            <form className={styles['formlog']} action="">
                <h2>Влез в своя профил</h2>

                <div className={styles['email']}>
                    <input type="text" placeholder='email' required />
                    <i className="fa-solid fa-at"></i>
                </div>

                <div className={styles['pass']}>
                    <input type="password" placeholder='password' required />
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