import { Formik, ErrorMessage } from 'formik';
import { Form } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contact/contactsSlice';
import { addContact } from 'redux/contact/operations';
import { useId } from 'react';

const initialValues = {
  name: '',
  number: '',
};

const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={message => <p>{message}</p>} />;
};

export const ContactForm = ({ onSubmit }) => {
  const labelNameId = useId();
  const labelNumberId = useId();
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmitForm = ({ name, number }, { resetForm }) => {
    const existingName = contacts.some(
      contact => contact.name.trim().toLowerCase() === name.trim().toLowerCase()
    );
    if (existingName) {
      console.log(`${name} is already in contacts`);
      return;
    }
    const contact = { name: name.trim(), number };
    dispatch(addContact(contact));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmitForm}>
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <div>
            <label htmlFor={labelNameId}>Name</label>
            <div>
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="Name"
                id={labelNameId}
              />
            </div>
            <FormError name="name" />
          </div>

          <div>
            <label htmlFor={labelNumberId}>Number</label>
            <div>
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                placeholder="Phone number"
                id={labelNumberId}
              />
            </div>
            <FormError name="number" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};
