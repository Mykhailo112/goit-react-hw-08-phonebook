import { useFetchContactsQuery } from 'servises/api';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';

function Contacts() {
  const { data: contacts } = useFetchContactsQuery();
  const totalContact = () => {
    if (!contacts) {
      return 0;
    }
    return contacts.length;
  };

  return (
    <div>
      <div>
        <section>
          <h2>Add contact</h2>
          <ContactForm />
        </section>
        <section>
          <h2>Contacts</h2>
          {totalContact !== 0 ? (
            <>
              <Filter />
              <ContactList />
            </>
          ) : (
            <h2>
              There are no contacts in your Phonebook. Please add your first
              contact!
            </h2>
          )}
        </section>
      </div>
    </div>
  );
}
export default Contacts;
