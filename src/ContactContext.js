import React, { useState } from 'react';

export const ContactContext = React.createContext();

export const ContactProvider = (props) => {
  const [contacts, setContacts] = useState([
    {
      id: 0,
      name: 'Chris Martin',
      email: 'chris@gmail.com',
      phone: '333-333-3333'
    },
    {
      id: 1,
      name: 'Johnny Buckland',
      email: 'johnnyboy@gmail.com',
      phone: '333-555-8888'
    },
    {
      id: 2,
      name: 'Guy Berryman',
      email: 'mrberryman@gmail.com',
      phone: '666-666-6666'
    },
    {
      id: 3,
      name: 'Will Champion',
      email: 'wchampion@gmail.com',
      phone: '222-222-2222'
    }
  ]);
  return (
    <ContactContext.Provider value={[contacts, setContacts]}>
      {props.children}
    </ContactContext.Provider>
  );
};
