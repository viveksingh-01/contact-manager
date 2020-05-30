import React from 'react';
import PropTypes from 'prop-types';

class Contact extends React.Component {
  state = {
    showContactInfo: false
  };

  handleClick() {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  }

  deleteContact() {
    this.props.deleteContactHandler();
  }

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3 mx-auto" style={{ width: '80%' }}>
        <div className="d-flex justify-content-between align-items-center">
          <span
            className="d-flex"
            style={{ cursor: 'pointer' }}
            onClick={this.handleClick.bind(this)}
          >
            <h5>{name}</h5>
            <i className="fa fa-sort-down fa-lg mx-2"></i>
          </span>
          <i
            onClick={this.deleteContact.bind(this)}
            className="fa fa-trash fa-lg"
            style={{ cursor: 'pointer', color: 'red' }}
          ></i>
        </div>
        {showContactInfo && (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        )}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
