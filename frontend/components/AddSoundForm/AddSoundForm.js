import React from 'react'
import styles from './AddSoundForm.module.css'
import Button from '../shared/Button/Button'
import InputText from '../shared/InputText/InputText'

const AddSoundForm = () => {
    return (
        <form id={styles.AddSoundForm}>
            <InputText placeholder='Sound name' type='text' name='soundName' />
            <input
                required
                class={styles.formInput}
                type='file'
                name='soundFile'
            />
            <Button content={'Add sound'} submit={true} />
            <Button content={'Cancel'} whereTo={'/'} error={true} />
        </form>
    )
}

export default AddSoundForm
