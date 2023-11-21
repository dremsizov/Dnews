import styles from "../Home/HomePage.module.css";

import cardPic from "../../../public/assets/ns.jpg";
import cardPic2 from "../../../public/assets/asenVasilev.jpg";
import cardPic3 from "../../../public/assets/beer.jpg";
import cardPic4 from "../../../public/assets/borisov.jpg";
import cardPic5 from "../../../public/assets/carCrash.jpg";
import SliderCard from "../SliderCard/SliderCard";

export default function Home() {
  return (
    <>
    <SliderCard />
      <div className={styles["wrapper"]}>
        <section className={styles["newsContainter"]}>
          <article className={styles["newsCard"]}>
            <div className={styles["cardNewsImg"]}>
              <img src={cardPic} className={styles["cardPic"]} alt="CardPic" />
            </div>

            <div className={styles["cardNesInfo"]}>
              <h3>Отхвърлиха ветото на президента</h3>
              <p className={styles["publicDate"]}>10 Ноември / Политика</p>
              <p className={styles["firstrow"]}>
                Парламентът отхвърли ветото на президента върху закона за
                енергетиката...
              </p>
            </div>
          </article>

          <article className={styles["newsCard"]}>
            <div className={styles["cardNewsImg"]}>
              <img
                src={cardPic2}
                className={styles["cardPic2"]}
                alt="CardPic"
              />
            </div>

            <div className={styles["cardNesInfo"]}>
              <h3>Парите на държавата: БЮДЖЕТ 2024</h3>
              <p className={styles["publicDate"]}>10 Ноември / Икономика</p>
              <p className={styles["firstrow"]}>
                Министър Василев представи параметрите на държавния бюджет...
              </p>
            </div>
          </article>

          <article className={styles["newsCard"]}>
            <div className={styles["cardNewsImg"]}>
              <img
                src={cardPic3}
                className={styles["cardPic3"]}
                alt="CardPic"
              />
            </div>

            <div className={styles["cardNesInfo"]}>
              <h3>Време за бира</h3>
              <p className={styles["publicDate"]}>10 Ноември / Любипитно</p>
              <p className={styles["firstrow"]}>
                Доказано е, че глобалното затопляне влияе на бирата...
              </p>
            </div>
          </article>
        

        {/* <aside className={styles["lastNews"]}>
            

          <article className={styles["newsCard"]}>
            <div className={styles["cardNewsImg"]}>
              <img
                src={cardPic4}
                className={styles["cardPic4"]}
                alt="CardPic"
                />
            </div>

            <div className={styles["cardNesInfo"]}>
              <h3>Ултиматум към партньора</h3>
              <p className={styles["publicDate"]}>12 Ноември / Политика</p>
              <p className={styles["firstrow"]}>
                Борисов постави няколко условия на партньорите си в
                управлението...
              </p>
            </div>
          </article>
                
        </aside> */}
        </section>

        <section className={styles['lastNews']}>
        <article className={styles["newsCardLast"]}>
            <div className={styles["cardNewsImg"]}>
              <img
                src={cardPic4}
                className={styles["cardPic4"]}
                alt="CardPic"
                />
            </div>

            <div>
              <h3>Ултиматум към партньора</h3>
              <p className={styles["publicDate"]}>12 Ноември / Политика</p>
              <p>
                Борисов постави няколко условия на партньорите си в
                управлението...
              </p>
            </div>
          </article>

          <article className={styles["newsCardLast"]}>
            <div className={styles["cardNewsImg"]}>
              <img
                src={cardPic5}
                className={styles["cardPic5"]}
                alt="CardPic"
                />
            </div>

            <div>
              <h3>Тежка катастрофа с жертви</h3>
              <p className={styles["publicDate"]}>12 Ноември / Политика</p>
              <p>
                Трима загинаха при тежка катастрофа на пътя Плевен-Ловеч...
              </p>
            </div>
          </article>
          
        </section>
      </div>
    </>
  );
}
