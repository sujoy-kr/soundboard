import RegisterForm from '../components/RegisterForm/RegisterForm'
import Link from 'next/link'

const register = () => {
    return (
        <>
            <h2 style={{ marginTop: 0 }}>Register</h2>
            <RegisterForm />
            <br />
            <Link href='/login'>
                <a>Have an account? login.</a>
            </Link>
        </>
    )
}

export default register
