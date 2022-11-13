import React from "react";
import Navbar from "../navbar/Navbar";
import NavbarJury from "../navbar/NavbarJury";
import useAuth from "../../hooks/useAuth";



function IsUser(props){
    const url = window.location.href
    const nonUrl = `http://localhost:3000/adminMain`
    
    const { auth } = useAuth();
    console.log(url)
    if ((auth.roles === true && url != nonUrl) || (auth.roles=== false && url != nonUrl)) {
      return (
        auth.roles === false ? 
              <NavbarJury/>
             : 
              <Navbar/>
            
            
      )}}
//     } else {
//       return null
//     } 
// }

export default IsUser;