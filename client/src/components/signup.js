import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Signup=()=>{
    const navigate=useNavigate()
    const [address,setadd]=useState({
        street: "",
        city: "",
        state: "",
    })
    const [data,setData]=useState({
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        address:null
   })
 
   const updateForm=(target)=>{
           setData({
               ...data,
               [target.id]:target.value
           })
   }
   
   const upadd=(target)=>{
       setadd({
           ...address,
           [target.id]:target.value
       })
       setData({
        ...data,
        address:address
       })
   }
   const Register=async()=>{
        try {
           let res=await fetch("http://localhost:8080/users/create",{
                        method:"POST",
                        body:JSON.stringify(data),
                        headers: {
                            'Content-Type': 'application/json'
                           
                          },
                   })
                let user=await res.json()
                if(user.message!=="success"){
                    alert(`{user.message}`)
                }
                else{
                    alert(`{user.message}`)
                    navigate("/")
                }
        } 
        catch (error) {
            console.log(error)
        }
   }
    return (
        <form >
        <button variant="text">Signup</button><br></br>
        <input onChange={(e)=>updateForm(e.target)} id="First_Name"  label="First Name" variant="outlined" />
        <input onChange={(e)=>updateForm(e.target)} id="Last_Name" margin='dense'  label="Last Name" variant="outlined" /><br></br>
        <input onChange={(e)=>updateForm(e.target)} id="Email"  margin='dense'  label="Email" variant="outlined" />
        <input onChange={(e)=>updateForm(e.target)} id="Password" margin='dense'  label="Password" variant="outlined" /><br></br>
        <button variant="text">Address</button><br></br>
        <input onChange={(e)=>upadd(e.target)} id="Street"  margin='dense' label="Street" variant="outlined" />
        <input onChange={(e)=>upadd(e.target)} id="City"  margin='dense' label="City" variant="outlined" /><br></br>
        <input onChange={(e)=>upadd(e.target)} id="State"  margin='dense'  label="State" variant="outlined" /><br></br>
       
        <br></br>
        <button onClick={()=>Register()} variant="contained">Submit</button><br></br>
        <br></br>
        <Link to="/login"><button variant="text">Login</button></Link>
   </form>
    )
}