import React from 'react';
import Contact from './Contact';

class Contacts extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 0,
          name: 'Chris Martin',
          email: 'chris@gmail.com',
          phone: '333-333-3333'
        },
        {
          id: 1,
          name: 'Johnny Buckland',
          email: 'johhnyboy@gmail.com',
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
      ]
    };
  }

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
