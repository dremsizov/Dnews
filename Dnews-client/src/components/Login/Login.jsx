import styles from '../Login/Login.module.css'

export default function Login() {


    return (
        <>

        <section className={styles['loginForm']}>
        <h2 className={styles['title']}>Влез в своя профил</h2>
            <form action="">
                <div className={styles['email']}>
                <label htmlFor="name">Email</label>
                <input type="text" />
                </div>
                <div className={styles['pass']}>
                <label htmlFor="name">Password</label>
                <input type="text" />
                </div>
                <div className={styles['signUp']}>
               
                <input type="button" value={'LOGIN'} />
                </div>
            </form>
        </section>

        <div className={styles['imgPen']}>
        <img src="assets/logo.png" alt="pen" />

        </div>
       
        
        </>
    );

}