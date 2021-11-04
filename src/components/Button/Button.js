import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

function Button(props) {
    return (
            <Link className={styles.btn} to={props.link}>{props.children}</Link>
    )
}

export default Button;