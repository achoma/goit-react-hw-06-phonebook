import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import ContactsList from './ContactList/ContactsList';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, setFilter } from '../redux/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();
  const { contacts, filter } = useSelector(state => state.contacts);

  useEffect(() => {
    const savedUserData = localStorage.getItem('user-data');
    if (savedUserData) {
      const data = JSON.parse(savedUserData);
      data.contacts.forEach(contact =>
        dispatch(addContact(contact.name, contact.number))
      );
      dispatch(setFilter(data.filter));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('user-data', JSON.stringify({ contacts, filter }));
  }, [contacts, filter]);

  const onChange = event => {
    const { name, value } = event.target;
    if (name === 'filter') {
      dispatch(setFilter(value));
    }
  };

  const onSubmit = (name, number) => {
    dispatch(addContact(name, number));
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <h1 className={css.heading}>Phonebook</h1>
      <ContactForm onSubmit={onSubmit} />
      <Filter filter={filter} onFilterChange={onChange} />
      <h2 className={css.heading}>Contacts</h2>
      <ContactsList
        contacts={contacts}
        filter={filter}
        onDelete={handleDelete}
      />
    </div>
  );
};
