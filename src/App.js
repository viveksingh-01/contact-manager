import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header branding="Contact Manager" />
        <Contact />
      </div>
    );
  }
}

export default App;
