import styles from "../Register/Register.module.css";

export default function Register() {
  return (
    <>
      <section className={styles["regForm"]}>
        <div className={styles["wrapper"]}>
          <form action="">
            <h2 className={styles["title"]}>Регистрирай се</h2>

            <div className={styles["regContent"]}>
              <div className={styles["inputBox"]}>
                <label htmlFor="firstName">Собствено име</label>
                <input
                  type="text"
                  placeholder="собствено име"
                  name="firstname"
                  required
                />
              </div>

              <div className={styles["inputBox"]}>
                <label htmlFor="lastName">Фамилия</label>
                <input
                  type="text"
                  placeholder="фамилия"
                  name="lastName"
                  required
                />
              </div>

              <div className={styles["inputBox"]}>
                <label htmlFor="email">Имейл</label>
                <input
                  type="email"
                  placeholder="въведете валиден имейл"
                  name="email"
                  required
                />
              </div>

              <div className={styles["inputBox"]}>
                <label htmlFor="username">Потребителско име</label>
                <input
                  type="text"
                  placeholder="потребителско име"
                  name="username"
                  required
                />
              </div>

              <div className={styles["inputBox"]}>
                <label htmlFor="password">Парола</label>
                <input
                  type="password"
                  placeholder="парола"
                  name="password"
                  required
                />
              </div>

              <div className={styles["inputBox"]}>
                <label htmlFor="repass">Повтори своята парола</label>
                <input
                  type="password"
                  placeholder="парола"
                  name="repass"
                  required
                />
              </div>

              <span className={styles["userOption-title"]}>
                Потребителски права
              </span>
              <div className={styles["userOption"]}>
                <input type="radio" id="admin" name="userOption" required />
                <label htmlFor="Администратор">Администратор</label>
                <input type="radio" id="writer" name="userOption" required />
                <label htmlFor="Редактор">Редактор</label>
              </div>

              <div className={styles["regBtn-container"]}>
                <button>Регистрирай се</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
