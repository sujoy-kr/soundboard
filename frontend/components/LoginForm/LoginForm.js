import Button from '../shared/Button/Button'
import InputText from '../shared/InputText/InputText'
import { login } from '../../services/users'
import ErrorMessage from '../shared/ErrorMessage/ErrorMessage'
import { useState } from 'react'

const LoginForm = () => {
    const [errorMessage, setErrorMessage] = useState(null)

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const username = e.target.username.value
        const password = e.target.password.value
        if (username && password) {
            const user = {
                username,
                password,
            }
            try {
                const response = await login(user)
                // save name and token in local storage
                localStorage.setItem('soundboard.name', response.name)
                localStorage.setItem('soundboard.token', response.token)

                // redirect to home page
                window.location.href = '/'
            } catch (error) {
                if (error.response.status === 401) {
                    setInterval(() => {
                        setErrorMessage(null)
                    }, 5000)
                    setErrorMessage('Invalid username or password.')
                }
            }
        }
    }

    return (
        <>
            <ErrorMessage message={errorMessage} />
            <form onSubmit={handleFormSubmit}>
                <InputText placeholder='Username' type='text' name='username' />
                <InputText
                    placeholder='Password'
                    type='password'
                    name='password'
                />
                <Button content={'Login'} submit={true} />
            </form>
        </>
    )
}

export default LoginForm
