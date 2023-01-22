import React from 'react';
import './ContactList.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

// const getVisibleContacts = () => {
//   // state.filter нормалізуємо один раз, а не при кожній ітерації методу filter
//   const normalizedFilter = filter.toLocaleLowerCase();

//   // contact
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  return (
    <>
      <ul className="contact__list">
        {contacts.map(({ id, name, number }) => (
          <li key={id} className="contact__item">
            <p className="contact__name">
              {name}: {number}
            </p>
            <button
              className="contact__button"
              type="buttone"
              onClick={() => dispatch(deleteContact(id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
