import { Ul, Li, Button } from './ContactList.styled.js';
import { CgTrash } from 'react-icons/cg';
import { useMemo } from 'react';
import { useFilterValue } from 'hooks/hooks.js';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'servises/api.js';

export const ContactList = () => {
  const filterValue = useFilterValue();
  const { data: contact } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const getFilteredContact = useMemo(
    () => () => {
      if (!contact) {
        return;
      }
      const normalizedFilter = filterValue.toLowerCase().trim();

      return contact.filter(
        contact =>
          contact.name.toLowerCase().includes(normalizedFilter) ||
          contact.number.includes(normalizedFilter)
      );
    },
    [contact, filterValue]
  );

  const filteredContact = getFilteredContact();

  const removeContact = async (contactId, contactName) => {
    try {
      await deleteContact(contactId);
      alert(`"${contactName}" has been deleted from your phone book`);
    } catch (error) {
      alert(`Something has happened, "${contactName}" was not deleted`);
    }
  };

  return (
    <Ul>
      {filteredContact &&
        filteredContact.map(({ id, name, number }) => (
          <Li key={id}>
            {name + ':' + number}
            {
              <Button type="button" onClick={() => removeContact(id, name)}>
                <CgTrash size={20} />
              </Button>
            }
          </Li>
        ))}
    </Ul>
  );
};
