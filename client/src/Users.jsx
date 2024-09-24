import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {

    const  [users, setUsers] = useState([
        {}
    ]);
    

    useEffect(() => {
        axios.get('http://localhost:3001')
        .then (result => {
            setUsers(result.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/' + id)
        .then (result => {
            console.log(result)
            window.location.reload()
        }).catch(err => {
            console.log(err)
        })
    }
    
    return (
        <div className='d-flex vh-100 bg-light justify-content-center align-items-center'>
            <div className='w-75 bg-white rounded p-4 shadow'>
                {/* <h4 className='mb-0'>User List</h4> */}
                <Link to={`/create`} className='btn btn-success  ms-auto'>Add User</Link>
                <table className='table table-bordered table-hover'>
                    <thead className='table-dark'>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <Link to={`/update/${user._id}`} className='btn btn-sm btn-primary me-2'>Update</Link>
                                    <button onClick={() => handleDelete(user._id)} className='btn btn-sm btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;
