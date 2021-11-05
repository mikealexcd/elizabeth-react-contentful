import styles from "./ContactForm.module.scss";

function ContactForm() {

    return (
        
        <div className={styles.container} id="contact">
            <div className={styles.wrapper}>
                <div className={styles.column}>
                    <h2 className={styles.heading}>Would you like to reach out?</h2>
                    <p className={styles.text}>Get in touch if you're interested in chatting with me!</p>
                </div>
                <div className={styles.column}>
                    <form className={styles.form}>
                        <input className={styles.email} type="email" name="email" placeholder="Email"></input>
                        <textarea className={styles.message} type="textarea" name="message" placeholder="Message"></textarea>
                        <input className={styles.submit} type="submit" name="submit"></input>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default ContactForm;