import config from "../config/config"
import React, { Component } from 'react'

const axios=require('axios').default;

export default class EmployeeService{

    baseUrl=config.baseUrl;
    addEmployee(data)
    {
        console.log(data)
        return axios.post(`${this.baseUrl}employee/`,data);
    }
}


