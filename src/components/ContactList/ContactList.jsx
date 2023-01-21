import React from 'react';
import './ContactList.css';
import { useSelector } from 'react-redux';

const ContactList = ({ deleteContact }) => {
  const contacts = useSelector(state => state.contacts);

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
              onClick={() => {
                deleteContact(id);
              }}
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
