import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import {
  Button,
  FormStyle,
  FormText,
  IconEmail,
  IconPassword,
  Input,
  InputWrap,
} from './LoginForm.styled';
import { useId } from 'react';

const initialValues = {
  email: '',
  password: '',
};

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <FormText>{message}</FormText>}
    />
  );
};

const validationScheme = object().shape({
  email: string().email().required(),
  password: string().required(),
});

export function LoginForm() {
  const dispatch = useDispatch();
  const labelEmailId = useId();
  const labelPasswordId = useId();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(
      logIn({
        email,
        password,
      })
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationScheme}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormStyle autoComplete="off">
          <div>
            <label htmlFor={labelEmailId}>E-mail</label>
            <InputWrap>
              <Input
                type="email"
                name="email"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                placeholder="e-mail"
                id={labelEmailId}
              />
              <IconEmail />
            </InputWrap>
            <FormError name="email" />
          </div>

          <div>
            <label htmlFor={labelPasswordId}>Password</label>
            <InputWrap>
              <Input
                type="password"
                name="password"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                placeholder="password"
                id={labelPasswordId}
              />
              <IconPassword />
            </InputWrap>
            <FormError name="password" />
          </div>

          <Button type="submit" disabled={isSubmitting}>
            LogIn
          </Button>
        </FormStyle>
      )}
    </Formik>
  );
}
