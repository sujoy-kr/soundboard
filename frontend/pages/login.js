import React from 'react'
import LoginForm from '../components/LoginForm/LoginForm'
import Link from 'next/link'

const login = () => {
    return (
        <>
            <h2 style={{ marginTop: 0 }}>Login</h2>
            <LoginForm />
            <br />
            <Link href='/register'>
                <a>Don't have an account? Create one.</a>
            </Link>
        </>
    )
}

export default login
