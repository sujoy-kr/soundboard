import React from 'react'
import styles from './Sound.module.css'

const Sound = ({ name, src, playKey }) => {
    const setKey = () => {
        window.addEventListener('keydown', (e) => {
            if (e.key === String(playKey)) {
                const audio = document.getElementById(`audio-${playKey}`)
                audio.play()
            }
        })
    }

    return (
        <>
            <div className={styles.music}>
                <p className={styles.musicName}>{name}</p>
                <audio
                    id={`audio-${playKey}`}
                    onLoad={setKey()}
                    className={styles.musicSrc}
                    controls
                >
                    <source src={src} type='audio/mpeg' />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </>
    )
}

export default Sound
