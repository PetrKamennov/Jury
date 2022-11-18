import React from "react";
import Navbar from "../navbar/Navbar";
import NavbarJury from "../navbar/NavbarJury";
import useAuth from "../../hooks/useAuth";



function IsUser(props){ 

  const visible = localStorage.getItem("visible")
  // const visible = localStorage.getItem("visible")


  console.log(visible)

    const url = window.location.href
    const nonUrl = `http://localhost:3000/adminMain`
    
    const { auth } = useAuth();
    if ((auth.roles === true && url != nonUrl) || (auth.roles=== false && url != nonUrl)) {
      return (
        auth.roles === false ? 
          <NavbarJury />
             : 
          <Navbar active={visible} />
            
            
      )}}
//     } else {
//       return null
//     } 
// }

export default IsUser;