import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useId } from 'react';
import { Form, Input, Button } from './RegisterForm.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={message => <p>{message}</p>} />;
};

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
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <div>
            <label htmlFor={labelNameId}>Name</label>
            <div>
              <Input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="name"
                id={labelNameId}
              />
            </div>
            <FormError name="name" />
          </div>

          <div>
            <label htmlFor={labelEmailId}>E-mail</label>
            <div>
              <Input
                type="email"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                name="email"
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
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                name="password"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                placeholder="password"
                id={labelPasswordId}
              />
            </div>
            <FormError name="password" />
          </div>

          <Button type="submit" disabled={isSubmitting}>
            Register
          </Button>
        </Form>
      )}
    </Formik>
  );
}
