import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Input, Button } from './LoginForm.styled';
import { useId } from 'react';

const initialValues = {
  email: '',
  password: '',
};

const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={message => <p>{message}</p>} />;
};

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
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <div>
            <label htmlFor={labelEmailId}>E-mail</label>
            <div>
              <Input
                type="email"
                name="email"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                placeholder="e-mail"
                id={labelEmailId}
              />
            </div>
            <FormError name="email" />
          </div>

          <div>
            <label htmlFor={labelPasswordId}>Password</label>
            <div>
              <Input
                type="password"
                name="password"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                placeholder="password"
                id={labelPasswordId}
              />
            </div>
            <FormError name="password" />
          </div>

          <Button type="submit" disabled={isSubmitting}>
            LogIn
          </Button>
        </Form>
      )}
    </Formik>
  );
}
