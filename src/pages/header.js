import { signOut } from "next-auth/react";
import Link from "next/link";
function Header(){
    
    return <>
    <div className="header">
        <div className="logo">

    <h2>Personal Blogs</h2>
    </div>

<div className="nav">
   <p><Link href="./signin" className="link" >Login</Link></p>
    <p onClick={signOut}><Link href="#" className="link">Logout</Link></p>
    </div>    
    </div>
    
    
    </>
    }
    export default Header; 
    
      