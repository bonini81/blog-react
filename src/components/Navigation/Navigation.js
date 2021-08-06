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
    <div class="container-fluid">
      <div class="row">
    
   <Navbar
     className="navbar navbar-dark bg-dark" expand="md">
     <NavbarBrand tag={Link} to="/">HODINKEE</NavbarBrand>
     <NavbarToggler onClick={toggle} />
     <Collapse isOpen={isOpen} navbar>
       <Nav className="mr-auto" navbar>
     
         <NavItem>
           <NavLink tag={Link} to="/">Home</NavLink>
         </NavItem>
         <NavItem>
           <NavLink tag={Link} to="/neww">Local Posts</NavLink>
         </NavItem>
         <NavItem>
           <NavLink tag={Link} to="/newslist">Remote Posts</NavLink>
         </NavItem>
       
       </Nav>
     </Collapse>
          </Navbar>
         
      </div>
      </div>
 );
}

export default Navigation;