// import { ContactForm } from './ContactForm/ContactForm';
import { useDispatch } from 'react-redux';
import { ContactList } from './ContactList/ContactList';
import { useEffect } from 'react';
import { fetchContacts } from './redux/operations';
// import { Filter } from './Filter/Filter';

export const AppNew = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);



  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}

      <h2>Contacts</h2>
      {/* <Filter /> */}
      <ContactList />
    </div>
  );
};
