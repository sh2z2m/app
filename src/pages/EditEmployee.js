import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditEmployee = () => {
    const { id } = useParams(); // Get the employee ID from URL params
    const [employee, setEmployee] = useState(null);

    const navigate = useNavigate()

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const { data } = await axios.get(`http://192.168.56.167:30081/${id}`);
                setEmployee(data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchEmployee();
    }, [id]);

    const updateEmployee = async (e) => {
        e.preventDefault(); // Prevent page refresh
        try {
            await axios.put(`http://192.168.56.167:30081/${id}`, employee);
            console.log('Employee updated successfully!');
            alert('Employee updated successfully!')
            navigate('/')
        } catch (error) {
            console.error('Error updating employee:', error);
            alert('error updating employee')

        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(prevEmployee => ({
            ...prevEmployee,
            [name]: value
        }));
    };

    if (!employee) {
        return <div>Loading...</div>;
    }

    return (
        <div className="edit-employee-container">
            <h2>Edit Employee</h2>
            <form className="edit-employee-form" onSubmit={updateEmployee}>
                <div className="form-group">
                    <label htmlFor="nom">Nom:</label>
                    <input type="text" id="nom" name="nom" value={employee.nom} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="prenom">Prenom:</label>
                    <input type="text" id="prenom" name="prenom" value={employee.prenom} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" value={employee.age} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="poste">Poste:</label>
                    <input type="text" id="poste" name="poste" value={employee.poste} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="salaire">Salaire:</label>
                    <input type="number" id="salaire" name="salaire" value={employee.salaire} onChange={handleChange} />
                </div>
                <button type="submit" className="save-button">Save Changes</button>
            </form>
        </div>
    );
};

export default EditEmployee;
