import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUser } from './userReducer';

function Home() {
    const  users  = useSelector((state) => state.users);
    const dispatch = useDispatch();
  return (
    <div>
      <div className="Container">
        <h1>React with Redux Crud App</h1>
        <Link  to ="/create" className="btn btn-primary">Add</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user)=>{
                    return(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link  to={`/edit/${user.id}`} className="btn btn-primary">Edit</Link>
                                 <button  onClick={() => dispatch(deleteUser(user.id))}  className="btn btn-danger">Delete</button></td>
                        </tr>
                    )
                })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
