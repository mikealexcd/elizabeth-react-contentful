import styles from "./Button.module.scss";

function Button(props) {
    return (
            <a className={styles.btn} href={props.link}>{props.children}</a>
    )
}

export default Button;