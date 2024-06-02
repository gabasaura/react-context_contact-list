import React from 'react';
import { FaFlushed, FaPen, FaTrash, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ContactCard = ({ contact, cardDelete, cardEdit }) => {

    
    return (
        <li className='list-group-item border-0'>
            <div className="card border-info my-3 rounded-0">
                <div className="row g-0">
                    <div className="col-lg-3 py-4">
                        <span className='mx-3 mb-2 p-0 justify-content-center'><FaFlushed className='contact-img' /></span>
                    </div>
                    <div className="col-lg-9 text-start">
                        <div className="p-0 m-0">
                            <ul className="list-group list-group-flush border-1 border-info">
                                <li className="list-group-item d-flex justify-content-between">
                                    <div className="d-flex me-auto"><strong>{contact.name}</strong></div>
                                    <span className="ms-auto">
                                        <FaPen onClick={() => cardEdit(contact)} />
                                        <FaTrash onClick={() => cardDelete(contact.id)} />
                                    </span>
                                </li>
                                <li className="list-group-item d-flex align-items-center">
                                    <FaEnvelope className="me-2" />
                                    <span>{contact.email}</span>
                                </li>
                                <li className="list-group-item d-flex align-items-center">
                                    <FaPhoneAlt className="me-2" />
                                    <span>{contact.phone}</span>
                                </li>
                                <li className="list-group-item d-flex align-items-center">
                                    <FaMapMarkerAlt className="me-2" />
                                    <span>{contact.address}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default ContactCard;