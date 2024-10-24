import { useEffect } from "react";
import { useState } from "react"
import axios from "axios";

const Display=()=>{
    const[employee,setEmployee]=useState([]);

useEffect(()=>{
    axios.get('https://aiswarya2325.pythonanywhere.com/employemanagement/employees/')
    .then(response => setEmployee(response.data))
    .catch(error => console.log(error));
},[]);
return(
    <div className="container mt-3">
        <h2>details</h2>
        <table className="table table-bordered table-hover ">
            <thead>
                <tr>
                <td>empid</td>
                <td>name</td>
                <td>address</td>
                <td>position</td>
                <td>salary</td>
                <td>phone</td>
                <td>email</td>
                <td>experiance</td>
                </tr>
            </thead>
            <tbody>
            {employee.map(emp=>(
                <tr key={emp.id}>
                    <td>{emp.empid}</td>
                    <td>{emp.name}</td>
                    <td>{emp.address}</td>
                    <td>{emp.position}</td>
                    <td>{emp.salary}</td>
                    <td>{emp.phone}</td>
                    <td>{emp.email}</td>
                    <td>{emp.experiance}</td>
                    <td>
                        <button className="bg-info" onClick={()=>editTask(task)}>edit</button>
                    </td>
                    <td>
                        <button>delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
 )
}

export default Display