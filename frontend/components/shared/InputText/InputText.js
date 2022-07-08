import styles from './InputText.module.css'

const InputText = ({ placeholder, required = true, type = 'text', name }) => {
    return (
        <input
            placeholder={placeholder}
            required={required}
            className={styles.formInput}
            type={type}
            name={name}
        />
    )
}

export default InputText
