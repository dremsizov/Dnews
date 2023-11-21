import styles from '../SliderCard/SliderCard.module.css'


import cardPic from "../../../public/assets/ns.jpg";
import cardPic2 from "../../../public/assets/asenVasilev.jpg";
import cardPic3 from "../../../public/assets/beer.jpg";

import cardPic4 from "../../../public/assets/borisov.jpg";
import cardPic5 from "../../../public/assets/carcrash.jpg";
import cardPic6 from "../../../public/assets/test2.png";

import cardPic7 from "../../../public/assets/pen2.png";
import cardPic8 from "../../../public/assets/test.png";
import cardPic9 from "../../../public/assets/bacground1.jpg";



export default function SliderCard(){
    return(
        <>
        <section className={styles['container']}>
            <div className={styles['card_container']}>

                
                <div id="slide1" className={styles['card_content']}>
                    
                        <article className={styles['card_article']}>
                           <div className={styles['card_img']}>
                            <img src={cardPic} alt="" className={styles['card_img']} />
                            <div className={styles['card_shadow']}></div>
                            </div> 
                            <div className={styles['card_data']}>
                                <h3 className={styles['card_name']}>Паралментът прие закона за частния фалит</h3>
                                <p className={styles['card_description']}>С 125 гласа парламентът гласува новите текстове за частния фалит</p>
                            </div>
                        </article>
                        <article className={styles['card_article']}>
                           <div className={styles['card_img']}>
                            <img src={cardPic2} alt="" className={styles['card_img']} />
                            <div className={styles['card_shadow']}></div>
                            </div> 
                            <div className={styles['card_data']}>
                                <h3 className={styles['card_name']}>Паралментът прие закона за частния фалит</h3>
                                <p className={styles['card_description']}>С 125 гласа парламентът гласува новите текстове за частния фалит</p>
                            </div>
                        </article>
                        <article className={styles['card_article']}>
                           <div className={styles['card_img']}>
                            <img src={cardPic3} alt="" className={styles['card_img']} />
                            <div className={styles['card_shadow']}></div>
                            </div> 
                            <div className={styles['card_data']}>
                                <h3 className={styles['card_name']}>Паралментът прие закона за частния фалит</h3>
                                <p className={styles['card_description']}>С 125 гласа парламентът гласува новите текстове за частния фалит</p>
                            </div>
                        </article>
                        



                </div>  

                  <div id="slide2" className={styles['card_content']}>
                    
                  <article className={styles['card_article']}>
                           <div className={styles['card_img']}>
                            <img src={cardPic4} alt="" className={styles['card_img']} />
                            <div className={styles['card_shadow']}></div>
                            </div> 
                            <div className={styles['card_data']}>
                                <h3 className={styles['card_name']}>Паралментът прие закона за частния фалит</h3>
                                <p className={styles['card_description']}>С 125 гласа парламентът гласува новите текстове за частния фалит</p>
                            </div>
                        </article>
                        <article className={styles['card_article']}>
                           <div className={styles['card_img']}>
                            <img src={cardPic5} alt="" className={styles['card_img']} />
                            <div className={styles['card_shadow']}></div>
                            </div> 
                            <div className={styles['card_data']}>
                                <h3 className={styles['card_name']}>Паралментът прие закона за частния фалит</h3>
                                <p className={styles['card_description']}>С 125 гласа парламентът гласува новите текстове за частния фалит</p>
                            </div>
                        </article>
                        <article className={styles['card_article']}>
                           <div className={styles['card_img']}>
                            <img src={cardPic6} alt="" className={styles['card_img']} />
                            <div className={styles['card_shadow']}></div>
                            </div> 
                            <div className={styles['card_data']}>
                                <h3 className={styles['card_name']}>Паралментът прие закона за частния фалит</h3>
                                <p className={styles['card_description']}>С 125 гласа парламентът гласува новите текстове за частния фалит</p>
                            </div>
                        </article>
                </div>         


                    <div id="slide3" className={styles['card_content']}>
                    
                    <article className={styles['card_article']}>
                           <div className={styles['card_img']}>
                            <img src={cardPic7} alt="" className={styles['card_img']} />
                            <div className={styles['card_shadow']}></div>
                            </div> 
                            <div className={styles['card_data']}>
                                <h3 className={styles['card_name']}>Паралментът прие закона за частния фалит</h3>
                                <p className={styles['card_description']}>С 125 гласа парламентът гласува новите текстове за частния фалит</p>
                            </div>
                        </article>
                        <article className={styles['card_article']}>
                           <div className={styles['card_img']}>
                            <img src={cardPic8} alt="" className={styles['card_img']} />
                            <div className={styles['card_shadow']}></div>
                            </div> 
                            <div className={styles['card_data']}>
                                <h3 className={styles['card_name']}>Паралментът прие закона за частния фалит</h3>
                                <p className={styles['card_description']}>С 125 гласа парламентът гласува новите текстове за частния фалит</p>
                            </div>
                        </article>
                        <article className={styles['card_article']}>
                           <div className={styles['card_img']}>
                            <img src={cardPic9} alt="" className={styles['card_img']} />
                            <div className={styles['card_shadow']}></div>
                            </div> 
                            <div className={styles['card_data']}>
                                <h3 className={styles['card_name']}>Паралментът прие закона за частния фалит</h3>
                                <p className={styles['card_description']}>С 125 гласа парламентът гласува новите текстове за частния фалит</p>
                            </div>
                        </article>
                </div>     

                <div className={styles['slider-controls']}>
        <a href="#slide1"></a>
        <a href="#slide2"></a>
        <a href="#slide3"></a>
      </div>
                </div>
            

        </section>
        </>
    );

}