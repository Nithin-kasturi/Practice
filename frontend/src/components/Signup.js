import React, { useState } from 'react'
import axios from 'axios';
export default function Signup() {
    const [fullname,setFullname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [reEnterPassword,setreEnterPassword]=useState("");
    async function handleSubmit(e){
        const userDetails={
            fullname:fullname,
            email:email,
            password:password
        }
        e.preventDefault();
        if(fullname==="" || email==="" || password==="" || reEnterPassword===""){
            alert("All are required");
        }
        else{
            if(password!==reEnterPassword){
                alert("password dont mathch");
            }
            else{
                await axios.post('http://localhost:5000/user/signup',userDetails)
                .then(
                    (res)=>{
                        if(res.data){
                            
                        }
                    }
                )
                .catch(err=>console.log(err.response.data.Message));
            }
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Signup Form</h1>
            <label>Full name</label>
            <input placeholder='Enter name' type='text'
            onChange={(event)=>setFullname(event.target.value)}
            />
                
            <label>email</label>
            <input placeholder='Enter email' type='email'
            onChange={(event)=>setEmail(event.target.value)}
            />
            <label>Password</label>
            <input placeholder='Enter password' type='password'
            onChange={(event)=>setPassword(event.target.value)}
            />
            <label>Reenter Password</label>
            <input placeholder='Reenter password' type='password'
            onChange={(event)=>setreEnterPassword(event.target.value)}
            />
            <button>Signup</button>
        </form>
    </div>
  )
}
