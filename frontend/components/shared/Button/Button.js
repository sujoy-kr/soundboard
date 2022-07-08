import Link from 'next/link'
import styles from './Button.module.css'

const Button = ({ content, whereTo = null, error = false, submit = false }) => {
    let bgColor = '#9EC894'
    if (error) {
        bgColor = '#C84446'
    }

    if (whereTo) {
        return (
            <Link href={whereTo}>
                <button
                    type={submit ? 'submit' : 'button'}
                    style={{ backgroundColor: bgColor }}
                    className={styles.button}
                >
                    {content}
                </button>
            </Link>
        )
    } else {
        return (
            <button
                type={submit ? 'submit' : 'button'}
                style={{ backgroundColor: bgColor }}
                className={styles.button}
            >
                {content}
            </button>
        )
    }
}

export default Button
