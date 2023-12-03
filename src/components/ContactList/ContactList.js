import { useDispatch, useSelector } from 'react-redux';
import { Ul, Li, Button } from './ContactList.styled.js';
import { CgTrash } from 'react-icons/cg';
import { deleteContact } from 'redux/contact/operations.js';
import { selectLoading } from 'redux/contact/contactsSlice.js';
import {
  selectContacts,
  selectFilteredContacts,
} from 'redux/contact/contactsSlice.js';

export const ContactList = () => {
  const filteredContact = useSelector(selectFilteredContacts);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  if (!contacts.length) return <p>The Phonebook is empty!</p>;
  if (!filteredContact.length) return null;
  return (
    <Ul>
      {filteredContact.map(({ id, name, number }) => (
        <Li key={id}>
          {name + ':' + number}
          {
            <Button
              type="button"
              data-id={id}
              onClick={() => dispatch(deleteContact(id))}
              disabled={isLoading}
            >
              <CgTrash size={20} />
            </Button>
          }
        </Li>
      ))}
    </Ul>
  );
};
