import React from 'react';
import { FaFlushed, FaPen, FaTrash, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaRegSmile } from 'react-icons/fa';

const ContactCard = ({ contact, isEditing, updatedContact, onInputChange, cardDelete, cardEdit, cardSave, cardCancel }) => {
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
                                {isEditing ? (
                                    <form>
                                        <li className="list-group-item d-flex justify-content-between">
                                            <div className="d-flex me-auto">
                                                <FaRegSmile className="me-2 mt-2" />
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={updatedContact.name}
                                                    onChange={(e) => onInputChange(e, contact.id)}
                                                />
                                            </div>
                                            <span className="ms-auto">
                                                <button className="btn btn-outline-info mx-1" type="button" onClick={() => cardSave(contact.id)}>Ok</button>
                                                <button className="btn btn-outline-info mx-1" type="button" onClick={cardCancel}>Cancel</button>
                                            </span>
                                        </li>
                                        <li className="list-group-item d-flex align-items-center">
                                            <FaEnvelope className="me-2" />
                                            <input
                                                type="text"
                                                name="email"
                                                value={updatedContact.email}
                                                onChange={(e) => onInputChange(e, contact.id)}
                                            />
                                        </li>
                                        <li className="list-group-item d-flex align-items-center">
                                            <FaPhoneAlt className="me-2" />
                                            <input
                                                type="text"
                                                name="phone"
                                                value={updatedContact.phone}
                                                onChange={(e) => onInputChange(e, contact.id)}
                                            />
                                        </li>
                                        <li className="list-group-item d-flex align-items-center">
                                            <FaMapMarkerAlt className="me-2" />
                                            <input
                                                type="text"
                                                name="address"
                                                value={updatedContact.address}
                                                onChange={(e) => onInputChange(e, contact.id)}
                                            />
                                        </li>
                                    </form>
                                ) : (
                                    <>
                                        <li className="list-group-item d-flex justify-content-between">
                                            <div className="d-flex me-auto">
                                                <FaRegSmile className="me-2 mt-1" /><strong>{contact.name}</strong></div>
                                            <span className="ms-auto">
                                                <FaPen className='mx-1 icon-card' onClick={() => cardEdit(contact)} />
                                                <FaTrash className='mx-1 icon-card' onClick={() => cardDelete(contact.id)} />
                                            </span>
                                        </li>
                                        <li className="list-group-item d-flex align-items-center">
                                            <FaEnvelope className="me-2" />
                                            {contact.email}
                                        </li>
                                        <li className="list-group-item d-flex align-items-center">
                                            <FaPhoneAlt className="me-2" />
                                            {contact.phone}
                                        </li>
                                        <li className="list-group-item d-flex align-items-center">
                                            <FaMapMarkerAlt className="me-2" />
                                            {contact.address}
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default ContactCard;
