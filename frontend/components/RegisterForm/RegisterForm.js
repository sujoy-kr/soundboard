import Button from '../shared/Button/Button'
import InputText from '../shared/InputText/InputText'
import { signup } from '../../services/users'

const RegisterForm = () => {
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const username = e.target.username.value
        const password = e.target.password.value
        if (name && username && password) {
            const newUser = {
                name,
                username,
                password,
            }
            try {
                const response = await signup(newUser)
                // save name and token in local storage
                localStorage.setItem('soundboard.name', response.name)
                localStorage.setItem('soundboard.token', response.token)

                // redirect to home page
                window.location.href = '/'
            } catch (error) {
                if (error.response.status === 401) {
                    alert('User already exists')
                }
            }
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <InputText placeholder='name' type='text' name='name' />
            <InputText placeholder='Username' type='text' name='username' />
            <InputText placeholder='Password' type='password' name='password' />
            <Button content={'Register'} submit={true} />
        </form>
    )
}

export default RegisterForm
