import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import {
  Button,
  FormStyle,
  FormText,
  IconUser,
  IconEmail,
  IconPassword,
  Input,
  InputWrap,
} from './RegisterForm.styled';
import { useId } from 'react';

const initialValues = {
  name: '',
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
  name: string().min(5).max(50).required(),
  email: string().email().required(),
  password: string()
    .matches(
      /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
      'does not match the required format'
    )
    .required(),
});

export function RegisterForm() {
  const dispatch = useDispatch();
  const labelNameId = useId();
  const labelEmailId = useId();
  const labelPasswordId = useId();

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(
      register({
        name,
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
            <label htmlFor={labelNameId}>Name</label>
            <InputWrap>
              <Input
                type="text"
                name="name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="name"
                id={labelNameId}
              />
              <IconUser />
            </InputWrap>
            <FormError name="name" />
          </div>

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
            Register
          </Button>
        </FormStyle>
      )}
    </Formik>
  );
}
