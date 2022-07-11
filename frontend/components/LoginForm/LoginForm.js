import Button from '../shared/Button/Button'
import InputText from '../shared/InputText/InputText'
import { login } from '../../services/users'

const LoginForm = () => {
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
                    alert('Invalid username or password')
                }
            }
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <InputText placeholder='Username' type='text' name='username' />
            <InputText placeholder='Password' type='password' name='password' />
            <Button content={'Login'} submit={true} />
        </form>
    )
}

export default LoginForm
