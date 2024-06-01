import React, { useContext } from 'react';
import { AppContext } from '../store/AppContext';
import { useNavigate, Link } from "react-router-dom";
import { FaFlushed } from "react-icons/fa";



const Home = () => {
    const { state, actions } = useContext(AppContext);
    const navigate = useNavigate()


    return (
        <div className="container m-5 text-center">
            <div className='w-50 mx-auto'>
                <div className="row align-items-center">
                    <h1>Lista de Contactos</h1>
                </div>
                <div className="row align-items-center  mt-5">
                    <p>No tienes contactos en tu lista</p>
                    <Link className="btn btn-outline-info w-50 mx-auto" to="/addcontact">Agregar Nuevo</Link>
                </div>
                <ul className='list-group'>
                    <li className='list-group-item border-0'>
                        <div className="card border-info my-3">
                            <div className="row g-0">
                                <div className="col-md-3 text-center p-3">
                                    <FaFlushed className='contact-img' />
                                </div>
                                <div className="col-md-9 text-start">
                                    <div className="card-body">
                                        <h5 className="card-title">nombre</h5>
                                        <p className="card-text">descripcion</p>
                                        <p className="card-text"><small className="text-body-secondary">Last updated</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className='list-group-item border-0'>
                        <div className="card border-info my-3">
                            <div className="row g-0">
                                <div className="col-md-3 text-center p-3">
                                    <FaFlushed className='contact-img' />
                                </div>
                                <div className="col-md-9 text-start">
                                    <div className="card-body">
                                        <h5 className="card-title">nombre</h5>
                                        <p className="card-text">descripcion</p>
                                        <p className="card-text"><small className="text-body-secondary">Last updated</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className='list-group-item border-0'>
                        <div className="card border-info my-3">
                            <div className="row g-0">
                                <div className="col-md-3 text-center p-3">
                                    <FaFlushed className='contact-img' />
                                </div>
                                <div className="col-md-9 text-start">
                                    <div className="card-body">
                                        <h5 className="card-title">nombre</h5>
                                        <p className="card-text">descripcion</p>
                                        <p className="card-text"><small className="text-body-secondary">Last updated</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Home;