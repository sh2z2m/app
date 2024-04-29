import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


// Import React, useEffect, useState, axios, and Link from 'react-router-dom'

const Employees = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const { data } = await axios.get('http://192.168.56.167:30081/');
                setEmployees(data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchEmployees();
    }, []);

    const deleteEmployee = async (id) => {
        try {
            await axios.delete(`http://192.168.56.167:30081/${id}`);
            setEmployees(employees.filter(employee => employee.id !== id));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="employees-container">
            <Link to='/create'><button className="add-employee-button">Add Employee</button></Link>
            <table className="employees-table">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Age</th>
                        <th>Poste</th>
                        <th>Salaire</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees?.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.nom}</td>
                            <td>{employee.prenom}</td>
                            <td>{employee.age}</td>
                            <td>{employee.poste}</td>
                            <td>{employee.salaire}</td>
                            <td>
                                <Link to={`/${employee.id}`} className="edit-link">Edit</Link> &nbsp;
                                <button className="delete-button" onClick={() => deleteEmployee(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Employees;
