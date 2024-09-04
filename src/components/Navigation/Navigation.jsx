import styles from "./Navigation.module.css"
const Navigation = () => {
    return (
        <nav className={`${styles.navigation} container`} >
            <div className="Logo">
                <img src="/images/logo.png" alt="do some codeing logo" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav >
    )
}

export default Navigation