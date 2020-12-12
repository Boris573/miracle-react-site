import React from 'react';

import '../pages.css';
import './contacts.css';

import phone from '../../../assets/icons/phone.svg';
import email from '../../../assets/icons/email.svg';
import pin from '../../../assets/icons/pin.svg';

import {getAllContacts} from '../../../services/contacts-service';

const ContactsPage = () => {

    const contactz = getAllContacts().map((item, i) => {
        return (
            <div className="contact-info" key={i}>
                <div id="office">Office {i+1}:</div>
                <div className="office-info">
                    <div className="office-info__item">
                        <img height="24px" alt="" src={pin} />
                        {item.address}
                    </div>
                    <div className="office-info__item">
                        <img height="24px" alt="" src={phone} />
                        {item.telephone}
                    </div>
                    <div className="office-info__item">
                        <img height="24px" alt="" src={email} />
                        {item.email}
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="tab-item">
            <div id="contacts" className="section">
                <div className="section-name">
                    <h2 className="headline"><b>Contacts</b></h2>
                </div>
                <div className="section-info">
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2353.129514382792!2d27.48271721525684!3d53.85834488008952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd07c88e6fa65%3A0x3caae88c96d29a8e!2z0L_RgNC-0YHQv9C10LrRgiDQlNC30LXRgNC20LjQvdGB0LrQvtCz0L4gOTUsINCc0LjQvdGB0LogMjIwMDg5!5e0!3m2!1sru!2sby!4v1606427384383!5m2!1sru!2sby"
                            width="600" height="450" title="map" frameBorder="0" style={{border:0}} allowFullScreen=""
                            aria-hidden="false" tabIndex="0">
                        </iframe>
                    </div>
                    <div className="offices">
                        {contactz}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactsPage;