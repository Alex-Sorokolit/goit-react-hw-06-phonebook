import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export function App() {
  // Дістаємо дані із localStorage з перевіркою чи вони там є, якщо немає то записуємо пустий масив
  const [contacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      return parsedContacts;
    }
    return [];
  });

  const [filter, setFilter] = useState('');

  //  Обновлює localeStorage кожен раз коли змінюється contacts
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  // Фільтр контактів наявних у масиві
  const getVisibleContacts = () => {
    // state.filter нормалізуємо один раз, а не при кожній ітерації методу filter
    const normalizedFilter = filter.toLocaleLowerCase();

    // contact
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>

      {contacts.length > 0 && (
        <>
          <Filter value={filter} changeFilter={changeFilter}></Filter>
          <ContactList filteredContacts={getVisibleContacts()} />
        </>
      )}
    </div>
  );
}
