import styles from './NavigationBar.module.css'


export default function NavBar() {
    return (
        <div>
            <nav>
            <ul className={styles['navBar']}>
                <li>Последно</li>
                <li>България</li>
                <li>Свят</li>
                <li>Политика</li>
                <li>Икономика</li>
                <li>Спорт</li>
                <li>Любипитно</li>
                <li>Анализи</li>

            </ul>
            </nav>
        </div>
    )
}