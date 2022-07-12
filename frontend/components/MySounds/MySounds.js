import Sound from '../Sound/Sound'
import { API } from '../../config/config'
import styles from './MySounds.module.css'

const MySounds = ({ sounds }) => {
    return (
        <>
            <h2>My sounds ({sounds.length})</h2>
            <div className={styles.mySounds}>
                {sounds.map((sound, i) => {
                    return (
                        <Sound
                            key={sound.id}
                            name={`${i} ${sound.name}`}
                            src={`${API}/${sound.file}`}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default MySounds
