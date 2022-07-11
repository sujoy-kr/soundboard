import React from 'react'
import styles from './AddSoundForm.module.css'
import Button from '../shared/Button/Button'
import InputText from '../shared/InputText/InputText'
import { postSound } from '../../services/sounds'

const AddSoundForm = ({ user }) => {
    const handleFormSubmission = async (e) => {
        // send form data to server
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', e.target.file.files[0])
        formData.append('name', e.target.name.value)

        // send form data to server
        await postSound(formData, user.token)
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
