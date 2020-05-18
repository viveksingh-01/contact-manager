import React from 'react';
import PropTypes from 'prop-types';

class Contact extends React.Component {
  state = {
    showContactInfo: false
  };

  handleClick() {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  }

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{' '}
          <i
            onClick={this.handleClick.bind(this)}
            className="fa fa-sort-down"
          ></i>
        </h4>
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
