import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAddContactMutation } from 'servises/api';
import { Form, Label } from './ContactForm.styled';

export const ContactForm = () => {
  const [addContact] = useAddContactMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    formState,
  } = useForm({
    defaultValues: {
      name: '',
      number: '',
    },
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  const addNewContact = async data => {
    try {
      await addContact(data);
      return alert('New contact has been added in your phone book');
    } catch (error) {
      return alert('Something has happened, new contact was not added');
    }
  };

  return (
    <Form onSubmit={handleSubmit(addNewContact)}>
      <Label>
        Name
        <input
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="off"
          {...register('name')}
        ></input>
        {errors.name && <div>{errors.name?.message}</div>}
      </Label>
      <Label>
        Numder
        <input
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="off"
          {...register('number')}
        ></input>
        {errors.name && <div>{errors.name?.message}</div>}
      </Label>
      <button type="submit">Add contact</button>
    </Form>
  );
};
