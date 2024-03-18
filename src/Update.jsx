import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {updateUser} from './userReducer';


function Update() {
    const {id} = useParams();
    const  users = useSelector((state) => state.users);
    const existingUser = users.filter((user) => user.id == id)[0];
    console.log(existingUser);
    const [data, setData] = useState(existingUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(data);
        dispatch(updateUser({...data, id:id}));
        navigate("/");
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Update User</h3>
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
            <button type="submit" className="btn btn-primary">Update</button>

        </form>
    </div>
</div>
  )
}

export default Update
