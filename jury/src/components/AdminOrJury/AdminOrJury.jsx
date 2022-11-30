import React from "react";
import Navbar from "../navbar/Navbar";
import NavbarJury from "../navbar/NavbarJury";
import useAuth from "../../hooks/useAuth";



function IsUser(props){ 

  const visible = localStorage.getItem("visible")
  // const visible = localStorage.getItem("visible")


  // console.log(visible)

    const url = window.location.href
    const nonUrl = `http://localhost:3000/adminMain`
    
    const roles = localStorage.getItem('roles');
  if ((roles === "true" && url != nonUrl) || (roles === "false" && url != nonUrl)) {
      return (
        roles === "false" ? 
          <NavbarJury />
             : 
          <Navbar active={visible} />
            
            
      )}}
//     } else {
//       return null
//     } 
// }

export default IsUser;