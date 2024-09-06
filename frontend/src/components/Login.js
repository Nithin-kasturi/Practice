import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function Login() {
    //Type1
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    async function  handleSubmit (e){
        e.preventDefault(); //prevemt from reloading
        const userDetails={
            email:email,
            password:password
        }
        if(email==="" || password===""){
            alert("All fields are required");
        }
        else{
            await axios.post('http://localhost:5000/user/login',userDetails)
            .then((res)=>console.log(res))
            .catch((err)=>console.log(err));
        }
    }
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <label>email</label>
            <input placeholder='Enter email'
             type='email'
             onChange={(event)=>setEmail(event.target.value)}
             />
            <label>Password</label>
            <input placeholder='Enter password' type='password'
            onChange={(event)=>setPassword(event.target.value)}
            />
            <button>Login</button>
        </form>
    </div>
  )
}
