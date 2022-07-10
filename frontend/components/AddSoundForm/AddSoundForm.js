import React from 'react'
import styles from './AddSoundForm.module.css'
import Button from '../shared/Button/Button'
import InputText from '../shared/InputText/InputText'

const AddSoundForm = () => {
    const handleFormSubmission = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const name = formData.get('name')
        const file = formData.get('file')

        const sound = {
            name,
            file,
        }

        const response = await fetch('/api/sound', {
            method: 'POST',
            body: JSON.stringify(sound),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json()
        console.log(data)
    }

    return (
        <form id={styles.AddSoundForm} onSubmit={handleFormSubmission}>
            <InputText placeholder='Sound name' type='text' name='soundName' />
            <input
                required
                className={styles.formInput}
                type='file'
                name='soundFile'
            />
            <Button content={'Add sound'} submit={true} />
            <Button content={'Cancel'} whereTo={'/'} error={true} />
        </form>
    )
}

export default AddSoundForm
