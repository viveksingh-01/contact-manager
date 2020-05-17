import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Contacts from './components/Contacts';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header branding="Contact Manager" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
