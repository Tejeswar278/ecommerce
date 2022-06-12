import "./home.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export const Home=()=>{
    const [categories,setCategories]=useState([])
     useEffect(()=>{
         getCate()
     },[])
 
     const getCate=async()=>{
         try {
                 let res=await fetch("http://localhost:8080/category")
                 let data=await res.json()
                 setCategories(data.data)
         } 
         catch (error) {
             console.log(error)
         }
     }
     return <div className="container" >
         {categories.map((ele)=>{
              return  <div key={ele._id} className="class2">
              <img src={ele.Logo} />
              <Link to={`/product/${ele._id}`}><button  variant="contained">{ele.Name}</button></Link>
             
          </div>
         })}
                
               
     </div>
 }