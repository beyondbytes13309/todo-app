import styles from './modal.module.css'

export default function Modal({title, message, setModalVisibilty, variant, setBtnPress}) {
    const handleClick = (btn_num) => {
        setBtnPress(btn_num)
        setModalVisibilty(false)
    }  

    return (
        <>
            <div className={styles.modal_div}>
                <h2 className={styles.modal_h2}>{title}</h2>
                <p className={styles.modal_p}>{message}</p>
                <div className={styles.buttons}>
                    <button className={styles.modal_button} onClick={() => handleClick(0)}>{variant == "confirmation" ? 'Yes' : 'Ok'}</button>
                    {variant=="confirmation" && <button onClick={() => handleClick(1)} className={styles.modal_button}>Cancel</button>}
                </div>
                
            </div>
        </>
    )
}