import AddSound from '../components/AddSound/AddSound'
import MySounds from '../components/MySounds/MySounds'
import LogOutBtn from '../components/LogOutBtn/LogOutBtn'
import { getSounds } from '../services/sounds'
import { useState, useEffect } from 'react'

export default function Home({}) {
    // set user from local storage
    const [user, setUser] = useState(null)
    const [sounds, setSounds] = useState([])
    useEffect(() => {
        const name = localStorage.getItem('soundboard.name')
        const token = localStorage.getItem('soundboard.token')
        if (!(name && token)) {
            window.location.href = '/login'
        }
        setUser(name)
    }, [])

    useEffect(() => {
        const token = localStorage.getItem('soundboard.token')
        getSounds(token).then((sounds) => {
            setSounds(sounds)
        })
    }, [])

    return (
        <>
            {user && <p>Welcome, {user}.</p>}
            <p>
                You can add up to 10 sounds and play them by pressing 0 - 9 on
                your keyboard.
            </p>
            <br />
            {sounds.length <= 9 && <AddSound />}
            <LogOutBtn />
            {sounds && <MySounds sounds={sounds} />}
        </>
    )
}
