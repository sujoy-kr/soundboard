import React from 'react'
import styles from './Sound.module.css'

const Sound = ({ name, src }) => {
    return (
        <>
            <div className={styles.music}>
                <p className={styles.musicName}>{name}</p>
                <audio className={styles.musicSrc} controls>
                    <source src={src} type='audio/mpeg' />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </>
    )
}

export default Sound
