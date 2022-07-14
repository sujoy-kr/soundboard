import styles from './ErrorMessage.module.css'

const ErrorMessage = ({ message }) => {
    if (!message) {
        return null
    }

    return <div className={styles.errorDiv}>{message}</div>
}

export default ErrorMessage
