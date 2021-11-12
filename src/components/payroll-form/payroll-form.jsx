import React, { useState } from 'react';
import profile1 from '../../assets/profile-images/Ellipse -3.png'
import profile2 from '../../assets/profile-images/Ellipse -2.png'
import profile3 from '../../assets/profile-images/Ellipse -1.png'
import profile4 from '../../assets/profile-images/Ellipse -8.png'
import { v1 as uuidv1 } from 'uuid';
import './payroll-form.scss';
import logo from '../../assets/images/logo.png'
import EmployeeService from '../../services/employee-service';

var employee = new EmployeeService();
const PayrollForm = (props) => {

    let initialValue = {

        name: '',
        profileArray: [
            { url: '../../../assets/profile-images/Ellipse -3' },
            { url: '../../../assets/profile-images/Ellipse -2' },
            { url: '../../../assets/profile-images/Ellipse -1' },
            { url: '../../../assets/profile-images/Ellipse -8' },

        ],
        allDepartment: [
            'HR', 'Sales', 'Finance', 'Engineer', 'Others'
        ],
        departmentValues: [],
        gender: '',
        salary: '',
        day: '1',
        month: 'Jan',
        year: '2020',
        startDate: '',
        notes: '',
        id: '',
        profileUrl: '',
        isUpdate: false,
        error: {
            deparment: '',
            name: '',
            gender: '',
            salary: '',
            profileUrl: '',
            startDate: ''
        }

    }

    const [formValue, setForm] = useState(initialValue);

    const changeValue = (event) => {
        setForm({ ...formValue, [event.target.name]: event.target.value })
    }

    const onCheckChange = (name) => {
        let index = formValue.departmentValues.indexOf(name);
        let checkArray = [...formValue.departmentValues]
        if (index > -1)
            checkArray.splice(index, 1)
        else
            checkArray.push(name);

        setForm({ ...formValue, departmentValues: checkArray });
    }

    const getChecked = (name) => {
        return formValue.departmentValues && formValue.departmentValues.includes(name);
    }

    const validData = async () => {
        let isError = false;
        let error = {
            deparment: '',
            name: '',
            gender: '',
            salary: '',
            profileUrl: '',
            startDate: ''

        }

        if (formValue.name.length < 1) {
            error.name = 'name is required field'
            isError = true;
        }

        if (formValue.gender.length < 1) {
            error.gender = 'gender is required field'
            isError = true;
        }

        if (formValue.salary.length < 1) {
            error.salary = 'salary is required field'
            isError = true;
        }

        if (formValue.profileUrl.length < 1) {
            error.profileUrl = 'profile is required field'
            isError = true;
        }

        if (formValue.departmentValues.length < 1) {
            error.deparment = 'deparment is required field'
            isError = true;
        }

        await setForm({ ...formValue, error: error })
        return isError;
    }

    const save = async (event) => {
        event.preventDefault();
        console.log("save");

        if(await validData())
        {
            console.log('error',formValue);
            return;
        }

        let object ={

            name:formValue.name,
            departMentValue:formValue.departmentValues,
            gender:formValue.gender,
            salary:formValue.salary,
            startDate:`${formValue.day} ${formValue.month} ${formValue.year}`,
            notes:formValue.notes,
            id:uuidv1(),
            profileUrl:formValue.profileUrl,
        }

        employee.addEmployee(object).then(data=>{
            console.log("data added");
        }).catch(err =>{
            console.log("err while add",err);
        })
    }

    const reset = () => {
        setForm({ ...initialValue, id: formValue.id, isUpdate: formValue.isUpdate })
        console.log(formValue)
    }

    return (

        <div className="body">
            <header className="headerContainer header">

                <div className="logoContainer">
                    <img src={logo} alt="" />
                    <div>
                        <span className="emp-text">EMPLOYEE</span><br />
                        <span className="emp-text emp-payroll">PAYROLL</span>
                    </div>
                </div>

            </header>
            <div className="form-content">
                <form className="form" action="#" onSubmit={save}>
                    <div className="form-head">Employee payroll form</div>
                    <div className="row-content">
                    <label className="label text" htmlFor="name">Name</label>
              <input className="input" type="text" id="name" name="name" value={formValue.name} onChange={changeValue} placeholder="Your name.." required />
                    </div>
                    <div className="error">{formValue.error.name}</div>
                    <div className="row-content">
                        <label className="label text" htmlFor="profileUrl">Profile image</label>
                        <div className="profile-radio-button">
                            <label>
                                <input type='radio' id="profile1" checked={formValue.profileUrl === '../../assets/profile-images/Ellipse -3.png'} name="profileUrl"
                                    value="../../assets/profile-images/Ellipse -3.png" onChange={changeValue} />
                                <img className="profile" id="image1" src={profile1} />
                            </label>
                            <label>
                                <input type='radio' id="profile2" checked={formValue.profileUrl ==='../../assets/profile-images/Ellipse -2.png'} name="profileUrl"
                                    value="../../assets/profile-images/Ellipse -2.png" onChange={changeValue} />
                                <img className="profile" id="image2" src={profile2} />
                            </label>
                            <label>
                                <input type='radio' id="profile3" checked={formValue.profileUrl === '../../assets/profile-images/Ellipse -1.png'} name="profileUrl"
                                    value="../../assets/profile-images/Ellipse -1.png" onChange={changeValue} />
                                <img className="profile" id="image3" src={profile3} />
                            </label>
                            <label>
                                <input type='radio' id="profile4" checked={formValue.profileUrl === '../../assets/profile-images/Ellipse -8.png'} name="profileUrl"
                                    value="../../assets/profile-images/Ellipse -8.png" onChange={changeValue} />
                                <img className="profile" id="image4" src={profile4} />
                            </label>
                        </div>
                    </div>
                    <div className="error">{formValue.error.profileUrl}</div>
                    <div className="row-content">
                        <label className="label text" htmlFor="gender">Gender</label>
                        <div>
                            <input type="radio" id="male" onChange={changeValue} name="gender" value="male" />
                            <label className="text" htmlFor="male">Male</label>
                            <input type="radio" id="female" onChange={changeValue} name="gender" value="female" />
                            <label className="text" htmlFor="female">Female</label>

                        </div>
                    </div>
                    <div className="error">{formValue.error.gender}</div>
                    <div className="row-content">
                        <label className="label text" htmlFor="department">Department</label>
                        <div>
                            {formValue.allDepartment.map(item => (
                                <span key={item}>

                                    <input className="checkbox " type="checkbox" onChange={() => onCheckChange(item)} name={item}
                                        defaultChecked={() => getChecked(item)} value={item} />

                                    <label className="text department" htmlFor={item}>{item}</label>
                                </span>
                            ))}
                        </div>

                    </div>

                    <div className="error">{formValue.error.deparment}</div>
                    <div className="row">
                        <label className="label text" htmlFor="salary">Salary</label>
                        <input className="input" type="number" onChange={changeValue} id="salary" value={formValue.salary} name="salary" placeholder="Salary" />

                    </div>
                    <div className="error">{formValue.error.salary}</div>
                    <div className="row"><label className="label text" htmlFor="startDate">Start date</label><div>
                        <select onChange={changeValue} id="day" name="day">
                            <option value="01">1</option>
                            <option value="02">2</option>
                            <option value="03">3</option>
                            <option value="04">4</option>
                            <option value="05">5</option>
                            <option value="06">6</option>
                            <option value="07">7</option>
                            <option value="08">8</option>
                            <option value="09">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option></select>
                        <select onChange={changeValue} id="month" name="month"><option value="Jan">January</option>
                            <option value="Feb">February</option>
                            <option value="Mar">March</option>
                            <option value="Apr">April</option>
                            <option value="May">May</option>
                            <option value="Jun">June</option>
                            <option value="July">July</option>
                            <option value="Aug">August</option>
                            <option value="Sep">September</option>
                            <option value="Oct">October</option>
                            <option value="Nov">November</option>
                            <option value="Dec">December</option></select>
                        <select onChange={changeValue} id="year" name="year">
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                        </select>
                    </div>

                    </div>
                    <div className="error">{formValue.error.startDate}</div>
                    <div className="row-content">
                        <label className="label text" htmlFor="notes">Notes</label>
                        <textarea onChange={changeValue} id="notes" value={formValue.notes} className="input" name="notes" placeholder=""
                            style={{ heigt: '100%' }}></textarea>

                    </div>

                    <div className="buttonParent">
                        <a routerLink="" className="resetButton button cancelButton">Cancel</a>
                        <div className="submit-reset">
                            <button type="submit" className="button submitButton" id="submitButton" onClick={save}>{formValue.isUpdate ? 'Update' : 'Submit'}</button>
                            <button type="button" onClick={reset} className="resetButton button">Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>


    )
}

export default PayrollForm