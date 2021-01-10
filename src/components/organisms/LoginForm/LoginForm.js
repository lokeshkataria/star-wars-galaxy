import { useForm } from "react-hook-form";
import { StyledLoginForm } from './LoginForm.styles';
import Input from '../../atoms/Input/Input';
import ErrorMsg from '../../atoms/ErrorMsg/ErrorMsg';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../state/actions';

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => dispatch(login(data));
  const user = useSelector((state) => state.user);

  return (
    <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
        <Input labelText="Username" id="username" name="username" inputRef={register({ required: true })} />
        <Input labelText="Password" id="password" name="password" inputRef={register({ required: true })} />
        <div>
          {errors.username && <ErrorMsg>Username is required</ErrorMsg>}
          {errors.password && <ErrorMsg>Password is required</ErrorMsg>}
          {user.error && <ErrorMsg>Something went wrong. Plese try again.</ErrorMsg>}
          {user.authenticationFailed && <ErrorMsg>Username or password is incorrect</ErrorMsg>}
        </div>
        <Input type="submit" />
    </StyledLoginForm>
  );
}

export default LoginForm;