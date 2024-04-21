import React, { useState } from 'react'
import "./login.css"
import axios from "axios"


const Login = () => {
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")

    const handleAdd = async (body) =>{
        try {
            await axios.post("http://localhost:3010/api/utilisateur/login",body)
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='login'>
       <div className="form">
      <div className="title">Welcome</div>
      <div className="subtitle">Let's create your account!</div>

      <div className="input-container ic1">
        <input placeholder="" type="text" className="input" id="email" onChange={(e)=>setEmail(e.target.value)} />
        <div className="cut cut-short"></div>
        <label className="iLabel" for="email">Email</label>
      </div>
      <div className="input-container ic2">
        <input placeholder="" type="password" className="input" id="firstname" onChange={(e)=>setPassword(e.target.value)}/>
        <div className="cut"></div>
        <label className="iLabel" for="firstname">Password</label>
      </div>
      <div className="noAccount">
        <p >Vous n’avez pas de compte ?</p><p className='goRegister'>enregister!</p>
      </div>

      <button className="submit" type="text" onClick={(e)=>{
        e.preventDefault()
        handleAdd({
            email:email,
            password:password
        })
      }}>Login</button>
    </div>
    </div>
  )
}

export default Login