import config from "../config/config"
import React, { Component } from 'react'

const axios=require('axios').default;

export default class EmployeeService{

    baseUrl=config.baseUrl;
    addEmployee(data)
    {
        console.log("push data")
        return axios.post(`${this.baseUrl}employee/`,data);
    }
    getAllEmployees()
    {
        console.log("get data")
        return axios.get(`${this.baseUrl}employee/`);
    }
    deleteEmployee(id)
    {
        console.log("deleted")
        axios.delete(`${this.baseUrl}employee/`+id);
    }
}


