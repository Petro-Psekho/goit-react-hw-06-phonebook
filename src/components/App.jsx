import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

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
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitData = data => {
    const currentName = contacts.find(
      item => item.name.toLowerCase() === data.name.toLowerCase()
    );
    if (currentName)
      return alert(currentName.name + ' is already in contacts.');

    setContacts(prevState => [...prevState, { ...data, id: nanoid() }]);
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContacts = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <Container>
      <div>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={formSubmitData} />
        <ContactsTitle>Contacts</ContactsTitle>
        <FindContactsTitle>Find contacts by name</FindContactsTitle>
        <Filter value={filter} onChange={changeFilter} />
        {contacts.length ? (
          <ContactList
            contacts={getFilteredContacts()}
            onDelete={deleteContacts}
          />
        ) : (
          <p>No any contacts</p>
        )}
      </div>
    </Container>
  );
}
