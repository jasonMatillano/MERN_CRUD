import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function CreateUser() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/create', {
            name: name,
            email: email,
            age: age
        })
        .then(result => {
            navigate('/')
            console.log(result)
        })
        .catch (err => {
            console.log(err)
        })
    }



    return (
        <div className='d-flex vh-100 bg-light justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-4 shadow'>
                <h4 className='mb-4'>Create User</h4>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>Name</label>
                        <input 
                            type='text' 
                            className='form-control' 
                            id='name' 
                            placeholder='Enter name' 
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input 
                            type='email' 
                            className='form-control' 
                            id='email' 
                            placeholder='Enter email' 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='age' className='form-label'>Age</label>
                        <input 
                            type='number' 
                            className='form-control' 
                            id='age' 
                            placeholder='Enter age' 
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn btn-primary w-100'>
                        Create User
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateUser;