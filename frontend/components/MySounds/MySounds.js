import Sound from '../Sound/Sound'
import { API } from '../../config/config'
import styles from './MySounds.module.css'

const MySounds = ({ sounds }) => {
    return (
        <>
            <h2>My sounds</h2>
            <div className={styles.mySounds}>
                {sounds.map((sound, i) => {
                    return (
                        <Sound
                            key={sound.id}
                            name={`${sound.name} (${i + 1})`}
                            src={`http://localhost:3001/api/${sound.file}`}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default MySounds
