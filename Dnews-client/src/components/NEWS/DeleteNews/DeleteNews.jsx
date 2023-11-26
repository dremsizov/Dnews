import styles from '../DeleteNews/DeleteNews.module.css'


export default function DeleteNews({
    onClose,
    onDeleteNews
}) {
    return(
       <>
                        <h3>Сигурни ли сте, че искате да изтриете тази новина?</h3>
                        <button className="btn close" onClick={onClose}></button>
                    
                    <div>
                        <div className={styles.actions}>
                            <button className={styles.action_delete} type="submit" onClick={onDeleteNews}>Изтрий</button>
                            <button className={styles.action_cancel} type="button" onClick={onClose}>
                                Откажи
                            </button>
                        </div>
                    </div>
       </>
                
        
    )
}