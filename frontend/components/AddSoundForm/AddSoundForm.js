import React from 'react'
import styles from './AddSoundForm.module.css'
import Button from '../shared/Button/Button'
import InputText from '../shared/InputText/InputText'
const fs = require('fs').promises
import { postSound } from '../../services/sounds'

const AddSoundForm = () => {
    const handleFormSubmission = async (e) => {
        // send form data to server
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', e.target.file.files[0])
        formData.append('name', e.target.name.value)

        // send form data to server
        await postSound(formData)
    }

    return (
        <form id={styles.AddSoundForm} onSubmit={handleFormSubmission}>
            <InputText placeholder='Sound name' type='text' name='name' />
            <input
                required
                className={styles.formInput}
                type='file'
                name='file'
            />
            <Button content={'Add sound'} submit={true} />
            <Button content={'Cancel'} whereTo={'/'} error={true} />
        </form>
    )
}

export default AddSoundForm
