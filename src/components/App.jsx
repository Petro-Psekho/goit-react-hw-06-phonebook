import { useSelector } from 'react-redux';
import { getContactsItems } from 'redux/contactsSlice';

import {
  Container,
  Title,
  ContactsTitle,
  FindContactsTitle,
} from 'components/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export default function App() {
  const contactsItems = useSelector(getContactsItems);

  return (
    <Container>
      <div>
        <Title>Phonebook</Title>
        <ContactForm />

        <ContactsTitle>Contacts</ContactsTitle>
        <FindContactsTitle>Find contacts by name</FindContactsTitle>
        <Filter />
        {contactsItems.length ? <ContactList /> : <p>No any contacts</p>}
      </div>
    </Container>
  );
}
