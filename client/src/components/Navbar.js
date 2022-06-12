import "./Navbar.css"
import { Link } from "react-router-dom";

export const Navbar=()=>{
    return (
        <div className='nav'> 

            <Link to="/"> <button sx={{color:"white"}} variant="text">Home Page</button></Link>
          
            <Link to="/cart"><button sx={{color:"white"}} variant="text">Cart Page</button></Link>

            <Link to="/login"><button sx={{color:"white"}} variant="text">Login Page</button></Link>
            
        </div>
    )
}