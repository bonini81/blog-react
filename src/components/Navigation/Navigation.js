import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
 Collapse,
 Navbar,
 NavbarToggler,
 NavbarBrand,
 Nav,
 NavItem,
 NavLink,
} from 'reactstrap';


const Navigation = (props) => {
 const [isOpen, setIsOpen] = useState(false);

 const toggle = () => setIsOpen(!isOpen);

 return (
   <Navbar
     className="navbar navbar-dark bg-dark"
     // style={{ backgroundColor: "black", color: "red" }}
     expand="md">
     <NavbarBrand tag={Link} to="/">MyPocket Links</NavbarBrand>
     <NavbarToggler onClick={toggle} />
     <Collapse isOpen={isOpen} navbar>
       <Nav className="mr-auto" navbar>
         <NavItem>
           <NavLink tag={Link} to="/">Login</NavLink>
         </NavItem>
         <NavItem>
           <NavLink tag={Link} to="/home">Home</NavLink>
         </NavItem>
         <NavItem>
           <NavLink tag={Link} to="/signup">Signup</NavLink>
         </NavItem>
         <NavItem>
           <NavLink tag={Link} to="/linkupload">Add my Link</NavLink>
         </NavItem>
       
       </Nav>
     </Collapse>
   </Navbar>
 );
}

export default Navigation;