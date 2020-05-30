import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import ContactList from './components/ContactList';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header branding="Contact Manager" />
        <div className="container">
          <ContactList />
        </div>
      </div>
    );
  }
}

export default App;
