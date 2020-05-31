import React from 'react';
import Contact from './Contact';
import { ContactContext } from './../ContactContext';

class ContactList extends React.Component {
  static contextType = ContactContext;

  deleteContact(id) {
    const setContacts = this.context[1];
    setContacts((contacts) => contacts.filter((item) => item.id !== id));
  }

  render() {
    const contacts = this.context[0];
    return (
      <React.Fragment>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteContactHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default ContactList;
