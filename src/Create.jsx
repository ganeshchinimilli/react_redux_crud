import React from 'react';
import { useState } from 'react';
import {addUser} from './userReducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Create() {
    const [data, setData] = useState({
        name: "",
        username: "",
        email: ""
    });
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(data);
        dispatch(addUser({...data, id:users[users.length-1].id+1}));
        navigate("/");
    }
    

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3>Add New User</h3>
            <form onSubmit = {handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" onChange={(e) => setData({...data, name: e.target.value})} value={data.name} />
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="username" aria-describedby="emailHelp" onChange={(e) => setData({...data, username: e.target.value})} value={data.username} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"  onChange={(e) => setData({...data, email: e.target.value})} value={data.email}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        </div>
    </div>
    
  )
}

export default Create
