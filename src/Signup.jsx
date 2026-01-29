import axios from 'axios';
import React, { useState } from 'react'

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitForm =  async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:3000/api/v1/users/signup");
            
        } catch (error) {
            
        }
    }
  return (
    <div className="container">
   <form onSubmit={submitForm}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value = {name} onChange={(e) => setName(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputPassword1" value = {email} onChange={(e) => setEmail(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" value = {password} onChange={(e) => setPassword(e.target.value)}/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
  )
}

export default Signup
