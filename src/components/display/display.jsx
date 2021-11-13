import deleteIcon from '../../assets/icons/delete-black-18dp.svg'
import editIcon from '../../assets/icons/create-black-18dp.svg'
import '../home/home.scss'
import EmployeeService from '../../services/employee-service';

var employee = new EmployeeService();

const Display = (props) => {   
    const remove= (id) =>{
        console.log("fdfdfd")
        employee.deleteEmployee(id)
    } 
    const update=(id)=>{

    }
    return(
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
                            <td><img className="profile" src={element.profileUrl} alt="dd" /></td>
                            <td>{element.name}</td>
                            <td>{element.gender}</td>
                            <td>{element.departMentValue && element.departMentValue.map(dept => (
                                <div className='dept-label'>{dept}</div>))}</td>
                                <td>$ {element.salary}</td>
                                <td>{element.startDate}</td>
                                <td><img onClick={() => remove(element.id)} src={deleteIcon} alt="delete" />
                                <img onClick={() => update(element.id)} src={editIcon} alt="edit" />
                                </td>
                                </tr>
                
                    ))
                }
            </tbody>
        </table>
    );
}
export default Display;