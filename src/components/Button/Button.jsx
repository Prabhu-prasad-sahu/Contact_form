import styles from "./button.module.css";

const handelButtonClick = (text, isViaBtn) => {
    if (isViaBtn) {
        alert(`Sorry for the inconvenience ,${text} button is on Development Process`)
    }
}
const Button = ({ icon, text, outline, isViaBtn }) => {
    return (
        <button className={outline ? styles.outline_button : styles.primary_button}
            onClick={() => handelButtonClick(text, isViaBtn)}
        >
            {icon}{text}
        </button >
    )
}
export default Button