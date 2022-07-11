import styles from './LogOutBtn.module.css'

const LogOutBtn = () => {
    const handleLogOut = () => {
        localStorage.removeItem('soundboard.name')
        localStorage.removeItem('soundboard.token')
        window.location.href = '/login'
    }

    return (
        <button className={styles.LogOutBtn} onClick={handleLogOut}>
            Log Out
        </button>
    )
}

export default LogOutBtn
