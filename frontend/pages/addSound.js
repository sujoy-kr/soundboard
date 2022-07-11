import React from 'react'
import AddSoundForm from '../components/AddSoundForm/AddSoundForm'
import { useState, useEffect } from 'react'

const addSound = () => {
    const [user, setUser] = useState({})
    useEffect(() => {
        const name = localStorage.getItem('soundboard.name')
        const token = localStorage.getItem('soundboard.token')
        if (name && token) {
            setUser({ name, token })
            console.log('user', user)
        } else {
            // relocate to login page
            window.location.href = '/login'
        }
    }, [])

    return (
        <>
            <h2 style={{ marginTop: 0 }}>Add a new sound</h2>
            {user && <AddSoundForm user={user} />}
        </>
    )
}

export default addSound
