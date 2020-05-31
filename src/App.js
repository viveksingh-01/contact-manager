import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import ContactList from './components/ContactList';
import About from './components/About';
import AddContact from './components/AddContact';
import { ContactProvider } from './ContactContext';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <ContactProvider>
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route path="/add" component={AddContact} />
                <Route path="/about" component={About} />
                <Route path="/" exact={true} component={ContactList} />
              </Switch>
            </div>
          </ContactProvider>
        </Router>
      </div>
    );
  }
}

export default App;
