import AddSound from '../components/AddSound/AddSound'
import MySounds from '../components/MySounds/MySounds'
import { getSounds } from '../services/sounds'

export default function Home({ sounds }) {
    return (
        <>
            <AddSound />
            <MySounds sounds={sounds} />
        </>
    )
}

// fetch sounds with getServerSideProps
export async function getServerSideProps() {
    const sounds = await getSounds()
    return {
        props: {
            sounds,
        },
    }
}
