import React, { useState, useEffect, useCallback } from 'react';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';
import { LOCALSTORAGE_KEY } from 'components/constants';
import css from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');


  
  const loadContactsFromLocalStorage = useCallback(() => {
    const savedContacts = localStorage.getItem(LOCALSTORAGE_KEY);
    if (savedContacts !== null) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    loadContactsFromLocalStorage();
  }, [loadContactsFromLocalStorage]);

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const normalizedFind = newContact.name.toLowerCase();
    const findName = contacts.find(
      contact => contact.name.toLowerCase() === normalizedFind
    );
    if (findName) {
      return alert(`${newContact.name} is already in contacts.`);
    }
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const handleChangeFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const filterContact = (name, filter) => {
    return name.toLowerCase().includes(filter.toLowerCase());
  };

  const contactSearch = contacts.filter(user =>
    filterContact(user.name, filter)
  );

  const namesContact = contacts.map(user => user.name);

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm addContact={addContact} namesContact={namesContact} />

      <h2 className={css.title}>Contacts</h2>
      <Filter handleChangeFilter={handleChangeFilter} filter={filter} />
      <ContactList
        contactSearch={contactSearch}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;







  // useEffect(() => {
  //   const savedContacts = localStorage.getItem(LOCALSTORAGE_KEY);
  //   if (savedContacts !== null) {
  //     setContacts(JSON.parse(savedContacts));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  // const filterContact = (name, filter) => {
  //   let nameLow = name.toLowerCase();
  //   let filterLow = filter.toLowerCase();
  //   return nameLow.indexOf(filterLow) >= 0;
  // };

  // const contactSearch = contacts.filter(user =>
  //   filterContact(user.name, filter)
  // );
