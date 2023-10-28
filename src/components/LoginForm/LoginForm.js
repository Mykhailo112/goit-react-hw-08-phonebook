import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userSignIn } from 'redux/auth/operations';
import { Form, Label, Input, Button } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    formState,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onTouched',
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  const loginUser = data => {
    dispatch(userSignIn(data));
  };

  return (
    <Form onSubmit={handleSubmit(loginUser)}>
      <Label>
        Email
        <Input
          type="email"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="off"
          {...register('email')}
        />
        {errors.email && <div>{errors.email?.message}</div>}
      </Label>

      <Label>
        Password
        <Input
          type="password"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="off"
          {...register('password')}
        />
        {errors.password && <div>{errors.password?.message}</div>}
      </Label>
      <Button type="submit">Log in</Button>
    </Form>
  );
};
