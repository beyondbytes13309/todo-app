import styles from './modal.module.css'

export default function Modal({title, message, setModalVisibilty}) {
    return (
        <>
            <div className={styles.modal_div}>
                <h2 className={styles.modal_h2}>{title}</h2>
                <p className={styles.modal_p}>{message}</p>
                <button className={styles.modal_button} onClick={() => setModalVisibilty(false)}>Ok</button>
            </div>
        </>
    )
}