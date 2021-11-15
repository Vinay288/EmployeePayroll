import deleteIcon from '../../assets/icons/delete-black-18dp.svg'
import React, { useState } from 'react';
import editIcon from '../../assets/icons/create-black-18dp.svg'
import '../home/home.scss'
import EmployeeService from '../../services/employee-service';
import PayrollForm from '../payroll-form/payroll-form';
import { Link, useNavigate } from 'react-router-dom'

var employee = new EmployeeService();

const Display = (props) => {
    const remove = (id) => {
        employee.deleteEmployee(id)
        window.location.reload();

    }
    
    return (
        <table id="display" className="display">
            <tbody>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Start Date</th>
                    <th>Actions</th>
                </tr>
                {
                    props.employeeArray && props.employeeArray.map((element, ind) => (
                        <tr key={ind}>
                            <td><img className="profile" src={element.profilePic} alt="dd" /></td>
                            <td>{element.name}</td>
                            <td>{element.gender}</td>
                            <td>{element.departments && element.departments.map(dept => (
                                <div className='dept-label'>{dept}</div>))}</td>
                            <td>$ {element.salary}</td>
                            <td>{element.startDate}</td>
                            <td><img onClick={() => remove(element.employeeId)} src={deleteIcon} alt="delete" />
                                <Link to={"/form/" + (element.employeeId)}> <img src={editIcon} alt="edit" /></Link>
                            </td>
                        </tr>

                    ))
                }
            </tbody>
        </table>
    );
}
export default Display;