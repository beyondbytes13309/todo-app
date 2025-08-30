import styles from './styles/footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer1}>
            <p className={styles.ad}>&copy; {new Date().getFullYear()} Rana TODO App. All rights not reserved.</p>
        </footer>
    )
}