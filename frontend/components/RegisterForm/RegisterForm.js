import Button from '../shared/Button/Button'
import InputText from '../shared/InputText/InputText'

const RegisterForm = () => {
    return (
        <form>
            <InputText placeholder='name' type='text' name='name' />
            <InputText placeholder='Username' type='text' name='username' />
            <InputText placeholder='Password' type='password' name='password' />
            <Button content={'Register'} submit={true} />
        </form>
    )
}

export default RegisterForm
