import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Contact extends Component {
  onShowClick()  {

  }
    render() {
        const {name,email,contact} =this.props;
         return (
            <div className="card card-body mb-3">
                <h4>{name}
                <i className="fas fa-sort-down" onClick="{this.onShowClick}"></i>

                </h4>
                <ul className="list-group">
                    <li className="list-group-item"> EMail : {email}</li>
                    <li className="list-group-item">Contact : {contact}</li>
                </ul>
            </div>
        )
    }
}
Contact.propTypes={
        name:PropTypes.string.isRequired,
        email:PropTypes.string.isRequired,
        contact:PropTypes.string.isRequired,
    
}
export default Contact;