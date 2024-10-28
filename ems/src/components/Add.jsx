
import { useState } from "react"
import axios from "axios";

const AddEmployee=()=>{
    const[empid,setId]=useState('');
    const[name,setName]=useState('')
    const[address,setAdderess]=useState('')
    const[position,setPos]=useState('')
    const[salary,setSal]=useState('')
    const[phone,setPhone]=useState('')
    const[email,setEmail]=useState('')
    const[experiance,setExp]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post(`https://alan2325.pythonanywhere.com/employe/employees/I/`,{empid,name,address,position,salary,phone,email,experiance})
        .then(response =>{
            console.log(response.data);
            setId('')
            setName('')
            setAdderess('')
            setPos('')
            setSal('')
            setPhone('')
            setEmail('')
            setExp('')
        })
        .catch(error=>console.log(error));
    }
    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
            <h2 className="text-info"><u>ADD</u></h2>
            <div>
                <label className="">EMPID</label>
                <input type="number"
                className="form-control"
                value={empid}
                onChange={(e)=>setId(e.target.value)}
                />
            </div>
            <div className="mt-2">
            <label className="">NAME</label>
                <input type="text"
                className="form-control"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div className="mt-2">
            <label className="">ADDRESS</label>
                <input type="text"
                className="form-control"
                value={address}
                onChange={(e)=>setAdderess(e.target.value)}
                />
            </div>
            <div className="mt-2">
            <label className="">POSITION</label>
                <input type="text"
                className="form-control"
                value={position}
                onChange={(e)=>setPos(e.target.value)}
                />
            </div>
            <div className="mt-2">
            <label className="">SALARY</label>
                <input type="number"
                className="form-control"
                value={salary}
                onChange={(e)=>setSal(e.target.value)}
                />
            </div>
            <div className="mt-2">
            <label className="">PHONE</label>
                <input type="number"
                className="form-control"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                />
            </div>
            <div className="mt-2">
            <label className="">EMAIL</label>
                <input type="email"
                className="form-control"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div className="mt-2">
            <label className="">EXPERIANCE</label>
                <input type="number"
                className="form-control"
                value={experiance}
                onChange={(e)=>setExp(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-success mt-3">ADD EMPLOYEE</button>
            </form>
        </div>
    )
    }
    export default AddEmployee