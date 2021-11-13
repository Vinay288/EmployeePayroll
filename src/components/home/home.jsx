import logo from '../../assets/images/logo.png';
import addButton from '../../assets/images/add-24px.svg';
import Display from '../display/display';
import EmployeeService from '../../services/employee-service';
import '../home/home.scss'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";

var employee = new EmployeeService();

const Home = (props) => {
    const [employeeArray, setEmployeeArray] = useState([])
    const getAllEmployees = () => {
        employee.getAllEmployees().then(emp => {
            console.log("data after get",Array.from(emp.data));
            setEmployeeArray(emp.data )
        })
            .catch(err => {
                console.log("err after", err);
            })
    }
    console.log("hi", employeeArray);

    return (
        <>
            <div className="body" onLoad={getAllEmployees}>
                <header className="header-content header">
                    <div className="logo-content">
                        <img src={logo} alt="" />
                        <div>
                            <span className="emp-text">EMPLOYEE</span>
                            <span className="emp-text emp-payroll">PAYROLL</span>
                        </div>
                    </div>
                </header><div className="main-content">
                    <div className="header-content">
                        <div className="heading">
                            Employee Details
                            <div className="emp-count">
                                {employeeArray.length}
                            </div>
                        </div>
                        <Link to="payroll-form" className="add-button">
                            <img src={addButton} alt="" />Add User</Link>
                    </div>
                    <div className="table-main">
                        <Display employeeArray={employeeArray} />
                    </div>
                </div>
            </div></>
    );
}

export default Home;
