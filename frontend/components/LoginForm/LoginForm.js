import Button from '../shared/Button/Button'
import InputText from '../shared/InputText/InputText'

const LoginForm = () => {
    return (
        <form>
            <InputText placeholder='Username' type='text' name='username' />
            <InputText placeholder='Password' type='password' name='password' />
            <Button content={'Login'} submit={true} />
        </form>
    )
}

export default LoginForm
