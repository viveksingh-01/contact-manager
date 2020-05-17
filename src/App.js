import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header branding="Contact Manager" />
        <Contact
          name="John Doe"
          email="johndoe@gmail.com"
          phone="555-555-5555"
        />
        <Contact
          name="Will Smith"
          email="willsmith@gmail.com"
          phone="333-333-3333"
        />
      </div>
    );
  }
}

export default App;
