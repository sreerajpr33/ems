import { useEffect } from "react";
import { useState } from "react"
import axios from "axios";





const Display=()=>{
    const[employee,setEmployee]=useState([]);
    const[editing,setEditing]=useState(false);
    const[currentTask,setcurrentTask]=useState({id:null,empid:null,name:'',address:'',position:'',salary:null,experiance:null,phone:null,email:''})

useEffect(()=>{
    axios.get('https://alan2325.pythonanywhere.com/employe/employees/I/')
    .then(response => setEmployee(response.data))
    .catch(error => console.log(error));
},[]);
const editTask =(task)=>{
    setEditing(true);
    setcurrentTask(task);
};
const updateTask=(id,updatedTask) =>{
    setEditing(false);
    axios.put(`https://alan2325.pythonanywhere.com/employe/employees/I/${id}/`,updatedTask)
    .then(response =>{
        setEmployee(employee.map(task=>(task.id ===id ? response.data:task)))
    })
    .catch(error=>console.log(error));
};
const deleteTask=(id)=>{
    axios.delete(`https://alan2325.pythonanywhere.com/employe/employees/I/${id}/`)
    .then(()=>{
        setEmployee(employee.filter(emp=>emp.id !==id))
    })
    .catch(error =>console.log(error))
};
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
                        <button className="bg-info" onClick={()=>editTask(emp)}>edit</button>
                    </td>
                    <td>
                        <button onClick={()=>deleteTask(emp.id)}>delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        {editing ?(
            <EditTaskForm
            currentTask={currentTask}
            updateTask={updateTask}
            />
        ): null}
    </div>
 )
}
const EditTaskForm=({currentTask,updateTask})=>{
    const[task,setTask]=useState(currentTask);
    const handleInputChange=(e)=>{
        const{name,value}=e.target;
        setTask({...task,[name]:value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        updateTask(task.id,task);
    }
    return(
        <form onSubmit={handleSubmit}>
            <h2 className="text-info">Edit Employee Details</h2>
            <div>
                <label>EMPID</label>
                <input type="text" 
                name="empid"
                value={task.empid}
                onChange={handleInputChange}
                />
            </div>
            <div className="mt-2">
            <label className="">NAME</label>
                <input type="text"
                name="name"
                value={task.name}
                onChange={handleInputChange}
                />
            </div>
            <div className="mt-2">
            <label className="">ADDRESS</label>
                <input type="text"
                name="address"
                value={task.address}
                onChange={handleInputChange}
                />
            </div>
            <div className="mt-2">
            <label className="">POSITION</label>
                <input type="text"
                name="position"
                value={task.position}
                onChange={handleInputChange}
                />
            </div>
            <div className="mt-2">
            <label className="">SALARY</label>
                <input type="number"
                name="salary"
                value={task.salary}
                onChange={handleInputChange}
                />
            </div>
            <div className="mt-2">
            <label className="">PHONE</label>
                <input type="number"
                name="phone"
                value={task.phone}
                onChange={handleInputChange}
                />
            </div>
            <div className="mt-2">
            <label className="">EMAIL</label>
                <input type="email"
                name="email"
                value={task.email}
                onChange={handleInputChange}
                />
            </div>
            <div className="mt-2">
            <label className="">EXPERIANCE</label>
                <input type="number"
                name="experiance"
                value={task.experiance}
                onChange={handleInputChange}
                />
            </div>
            <button type="submit" className="btn btn-success mt-3">ADD EMPLOYEE</button>
        </form>
    )
}

export default Display