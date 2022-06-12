import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import "./product.css"

export const Product=()=>{
    const id=useParams().id
    const [Data,setData]=useState([])
    useEffect(()=>{
         getProducts()
    },[])

    const getProducts=async()=>{
         try {
            let res=await fetch(`http://localhost:8080/products/category/${id}`)
            let data=await res.json()
            setData(data.data)
            
         } 
         catch (error) {
            console.log(error)
         }
    }
    
    return (
        <div className="ProdMainDiv">
            {Data.map((ele)=>{
                 return (<div className="ProdDiv" key={ele._id}>
                         <img src={ele.Product_Img} alt=""/>
                         <p className="BrandName">{ele.Brand_ID.Brand_Name}</p>
                         <p>{ele.Product_Name}</p>
                         <p>₹{ele.Price}</p>
                 </div>)
            })}
        </div>
    )
}