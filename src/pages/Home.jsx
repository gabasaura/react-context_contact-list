import React, { useContext, useEffect } from 'react';
import { AppContext } from '../store/AppContext';
import { useNavigate, Link } from "react-router-dom";
import ContactCard from '../components/Card';

const Home = () => {
    const { store, actions } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        actions.fetchContacts();  // Call fetchContacts to load contacts
    }, []);  // Empty dependency array ensures this runs only once

    useEffect(() => {
        console.log("Store contacts:", store.contacts); // Log the store contacts
    }, [store.contacts]);

    const handleEdit = (contact) => {
        navigate(`/editcontact/${contact.id}`);
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
                                    cardDelete={handleDelete} 
                                    cardEdit={handleEdit} 
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