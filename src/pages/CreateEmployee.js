import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateEmployee = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        age: '',
        poste: '',
        salaire: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://192.168.56.167:30081', formData);
            console.log('Employee created successfully!');
            alert('Employee created successfully!')
            navigate('/')
        } catch (error) {
            alert('error creting employee')
            console.error('Error creating employee:', error);
        }
    };

    return (
        <div className="create-employee-container">
            <h2>Create Employee</h2>
            <form className="create-employee-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nom">Nom:</label>
                    <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="prenom">Prenom:</label>
                    <input type="text" id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="poste">Poste:</label>
                    <input type="text" id="poste" name="poste" value={formData.poste} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="salaire">Salaire:</label>
                    <input type="number" id="salaire" name="salaire" value={formData.salaire} onChange={handleChange} />
                </div>
                <button type="submit" className="save-button">Create Employee</button>
            </form>
        </div>
    );
};

export default CreateEmployee;
