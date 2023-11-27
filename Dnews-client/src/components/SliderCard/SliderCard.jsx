import { useState, useEffect } from 'react';
import styles from '../SliderCard/SliderCard.module.css';

export default function Carousel() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Fetch data from the server
    // Replace 'imageUrl' with the actual property name containing the image URL
    fetch('http://localhost:3030/data/news')
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures the effect runs only once on mount

  useEffect(() => {
    // Set up the interval for automatic sliding
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [images]); // Restart the interval whenever the images array changes

  // Set currentImageIndex to the index of the last image
  useEffect(() => {
    setCurrentImageIndex(images.length - 1);
  }, [images]);

  return (
    <section className={styles.section}>
      <div className={styles.slider}>
        <div className={styles.slide}>
          {images.map((image, index) => (
            <input
              key={index}
              type="radio"
              name="radio-btn"
              id={`radio${index + 1}`}
              checked={index === currentImageIndex}
            />
          ))}
          {images.map((image, index) => (
            <div
              key={index}
              className={index === 0 ? styles['st first'] : styles.st}
            >
              {/* Access the correct property containing the image URL */}
              <img src={image.image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
          <div className={styles.navAuto}>
            <div className={styles.aB1}></div>
            <div className={styles.aB2}></div>
            <div className={styles.aB3}></div>
          </div>
        </div>

        <div className={styles.navManual}>
          {images.map((_, index) => (
            <label key={index} htmlFor={`radio${index + 1}`} className={styles.mBtn}></label>
          ))}
        </div>
      </div>
    </section>
  );
}























// import styles from '../SliderCard/SliderCard.module.css'
// import { useEffect } from "react";


// export default function SliderCard({
//     image,
    
// }){

//     useEffect(() => {
//         var counter = 1;
//         const intervalId = setInterval(function () {
//           document.getElementById('radio' + counter).checked = true;
//           counter++;
//           if (counter > 4) {
//             counter = 1;
//           }
//         }, 5000);
    
        
//         return () => clearInterval(intervalId);
//       }, []); 

      
//     return(
//         <>
//         <selection className={styles.section}>
//             <div className={styles.slider}>
//                 <div className={styles.slide}>
//                 <input type="radio" name='radio-btn' id='radio1' />
//                 <input type="radio" name='radio-btn' id='radio2' />
//                 <input type="radio" name='radio-btn' id='radio3' /><input type="radio" name='radio-btn' id='radio4' />
//                     <div className={styles['st first']}>
//                         <img src={image} alt="" />
//                     </div>
//                     <div className={styles.st}>
//                         <img src={image} alt="" />
//                     </div>
//                     <div className={styles.st}>
//                         <img src={image} alt="" />
//                     </div>

//                     <div className={styles.navAuto}>
//                         <div className={styles.aB1}></div>
//                         <div className={styles.aB2}></div>
//                         <div className={styles.aB3}></div>

//                     </div>
//                 </div>

//                 <div className={styles.navManual}> 
//                 <label htmlFor="radio1" className={styles.mBtn}></label>
//                 <label htmlFor="radio1" className={styles.mBtn}></label>
//                 <label htmlFor="radio1" className={styles.mBtn}></label>
                
//                 </div>
//             </div>

//         </selection>

  
                
//         </>
//     );

// }

