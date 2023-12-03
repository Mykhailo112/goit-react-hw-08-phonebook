import { deleteContact } from 'redux/contacts/operations';
import { ContacItem, Text, Button } from './ContactItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from 'redux/contacts/contactsSlice';
import { CgTrash } from 'react-icons/cg';

export function ContactItem({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  return (
    <ContacItem>
      <Text>
        {name}: <span>{number}</span>
      </Text>
      <Button
        type="button"
        data-id={id}
        onClick={() => dispatch(deleteContact(id))}
        disabled={isLoading}
      >
        <CgTrash size={20} color="red" />
      </Button>
    </ContacItem>
  );
}
