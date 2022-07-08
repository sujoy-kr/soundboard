import React from 'react'
import styles from './AddSoundForm.module.css'
import Button from '../shared/Button/Button'
import InputText from '../shared/InputText/InputText'

const AddSoundForm = () => {
    // convert mp3 file to base64
    const convertFileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result)
            reader.onerror = (error) => reject(error)
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (e.target.soundName.value && e.target.soundFile.files[0]) {
            const soundName = e.target.soundName.value
            const soundFile = e.target.soundFile.files[0]
            const soundFileBase64 = await convertFileToBase64(soundFile)

            const data = {
                name: soundName,
                file: soundFileBase64,
            }

            const response = await fetch(`${process.env.API}/sound`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
        }
    }

    return (
        <form id={styles.AddSoundForm} onSubmit={handleSubmit}>
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
