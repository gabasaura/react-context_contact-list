import React, { useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { FaMapMarkerAlt, FaRegSmile, FaEnvelope, FaPhoneAlt } from "react-icons/fa";



const AddContact = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        navigate("/");
    };

    return (
        <div className="container m-5 text-center">
            <div className='w-50 mx-auto'>
                <div className="row align-items-center">
                    <h1>Nuevo Contacto</h1>
                </div>
                <div className="row align-items-center mt-5">
                    <p>Por favor, rellena los campos para ingresar un nuevo contacto.</p>

                </div>
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><FaRegSmile/></span>
                                <input type="text" className="form-control" placeholder="Nombre y Apellido" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><FaEnvelope/></span>
                                <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><FaPhoneAlt/></span>
                                <input type="text" className="form-control" placeholder="Teléfono" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><FaMapMarkerAlt/></span>
                                <input type="text" className="form-control" placeholder="Dirección" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-outline-info w-100 mx-auto">agregar nuevo</button>
                    </form>
                    <div className='row text-start'>
                    <Link className="nav-link btn-icon-nav ms-3 mt-1" to="/"><small>Volver a Contactos</small></Link>
                    </div>
            </div>
        </div>
    );
};

export default AddContact;