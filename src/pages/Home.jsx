import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../store/AppContext';
import { Link } from "react-router-dom";
import ContactCard from '../components/Card';

const Home = () => {
    const { store, actions } = useContext(AppContext);
    const [editContactId, setEditContactId] = useState(null);
    const [updatedContact, setUpdatedContact] = useState({});

    useEffect(() => {
        actions.fetchContacts();  // Call fetchContacts to load contacts
    }, []);  // Empty dependency array ensures this runs only once

    const handleEdit = (contact) => {
        setEditContactId(contact.id);
        setUpdatedContact(contact);
    };

    const handleInputChange = (e, id) => {
        const { name, value } = e.target;
        if (id === editContactId) {
            setUpdatedContact({
                ...updatedContact,
                [name]: value
            });
        }
    };

    const handleSave = (id) => {
        actions.updateContact(id, updatedContact);
        setEditContactId(null); // Exit edit mode
    };

    const handleCancel = () => {
        setEditContactId(null); // Exit edit mode
    };

    const handleDelete = (id) => {
        actions.deleteContact(id);
    };

    return (
        <div className="container m-5 text-center">
            <div className='w-50 mx-auto'>
                <div className="row align-items-center">
                    <h1>Lista de Contactos</h1>
                </div>
                <div className="row align-items-center mt-5">
                    {store.contacts.length === 0 ? (
                        <>
                            <p>No tienes contactos en tu lista</p>
                            <Link className="btn btn-outline-info w-50 mx-auto" to="/addcontact">Agregar Nuevo</Link>
                        </>
                    ) : (
                        <>
                        <Link className="btn btn-outline-info w-50 mx-auto" to="/addcontact">Agregar Nuevo</Link>
                        <ul className="list-group list-group-flush">
                            {store.contacts.map(contact => (
                                <ContactCard 
                                    key={contact.id} 
                                    contact={contact} 
                                    isEditing={editContactId === contact.id}
                                    updatedContact={editContactId === contact.id ? updatedContact : contact}
                                    onInputChange={handleInputChange}
                                    cardDelete={handleDelete} 
                                    cardEdit={handleEdit} 
                                    cardSave={handleSave} 
                                    cardCancel={handleCancel} 
                                />
                            ))}
                        </ul>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
