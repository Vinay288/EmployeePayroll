import config from "../config/config"
import React, { Component } from 'react'

const axios=require('axios').default;

export default class EmployeeService{

    baseUrl=config.baseUrl;
    addEmployee(data)
    {
        console.log("push data")
        return axios.post(`${this.baseUrl}create/`,data);
    }
    getAllEmployees()
    {
        console.log("get data")
        return axios.get(`${this.baseUrl}`);
    }
    deleteEmployee(id)
    {
        console.log("deleted")
        axios.delete(`${this.baseUrl}delete/`+id);
    }
    updateEmployee(data,id)
    {
        console.log("update")
        axios.put(`${this.baseUrl}update/`+id,data);
    }
    getEmployee(id){
        console.log("get data for one")
        return axios.get(`${this.baseUrl}get/`+id);
    }
}


