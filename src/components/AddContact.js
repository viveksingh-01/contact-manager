import React from 'react';
import { ContactContext } from './../ContactContext';

class AddContact extends React.Component {
  static contextType = ContactContext;
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  submitForm(event) {
    event.preventDefault();
    const setContacts = this.context[1];
    setContacts((prevContacts) => [...prevContacts, this.state]);
  }

  render() {
    return (
      <React.Fragment>
        <div
          className="mx-auto my-5 p-4"
          style={{
            width: '60%',
            border: '1px solid #ddd',
            borderRadius: '6px'
          }}
        >
          <h3>Add a Contact</h3>
          <div className="p-3">
            <form>
              <div className="form-group">
                <label htmlFor="Name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
              </div>
              <input
                type="submit"
                className="btn btn-primary"
                value="Submit"
                onClick={this.submitForm.bind(this)}
              />
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddContact;
