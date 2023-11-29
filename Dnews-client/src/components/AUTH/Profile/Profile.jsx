import styles from "../Profile/Profile.module.css"
import {  useContext } from "react";

import {AuthContext} from "../../../contexts/AuthContext"

// import Modal from "react-modal";
// import { Link, useNavigate, useParams } from "react-router-dom";

// import * as userService from "../../../services/userService"

// Modal.setAppElement("#root");

// const formUserInitialState = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     username: "",
//   };

export default function Profile () {

    const { auth } = useContext(AuthContext);

    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const navigate = useNavigate();

    // const {userID} = useParams()
    // const [formUserValues, setFormUserValues] = useState(
    //     formUserInitialState
    //   );
    //   const [errors, setErrors] = useState({});
    
    //   useEffect(()=> {
    //     userService.getOneNews(newsID)
    //     .then(result=>setFormUserValues(result))
    //     .catch(err => console.log(err));
    // }, [userID])


    // const resetUserFormHandler = () => {
    //     setFormUserValues(formEditInitialState);
    //     setErrors({});
    //   };
    
    //   const formUserSubmitHandler = (e) => {
    //     e.preventDefault();
    //     setIsModalOpen(true);
    //   };

    //   const handleModalClose = () => {
    //     setIsModalOpen(false);
    //   };

    //   const handleUserConfirmation = () => {
    //     userService
    //       .editNews(userID,formUserValues)
    //       .then(() => {
    //         setIsModalOpen(false);
    //         navigate("/profile");
    //       })
    
    //       .catch((error) => console.log(error));
    
    //       resetUserFormHandler();
    //   };

    return (
        <>
        <section className={styles.wrapper}>
            <div className={styles.profileCardContainer}>
                <div className={styles.profileImage}>
                    <img src="/assets/profile8.png" alt="" />
                </div>
                <div className={styles.profileInfo}>


                <label htmlFor="">Име:</label>
                <input type="text" value={auth.firstName} disabled />
                <br />
                <label htmlFor="">Фамилия:</label>
                <input type="text" value={auth.lastName} disabled/>
                <br />
                <label htmlFor="">Меил:</label>
                <input type="text" value={auth.email} disabled/>
                <br />
                <label htmlFor="">Потребителско име:</label>
                <input type="text" value={auth.username} disabled/>
                </div>
                <div className={styles.buttons}>
            <button
              className={styles.createBtnEdit}
              type="submit"

            >
              Промени своите профил данни
            </button>
            </div>
            </div>
            <div className={styles.profileNewsCreate}>
                <div className={styles.profileNewsCreateTitle}>
                    <h2>Новините, които ти написа за нас!</h2>
                </div>

            </div>
            
            
        </section> 
        </>
    )
}