import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarLink,
} from "mdb-react-ui-kit";

export default function Navbar() {
    const pathname = window.location.pathname
  return (
    <MDBNavbar dark bgColor="dark">
      <MDBContainer fluid>
      <MDBNavbarBrand href='/'>
            <img
              src='https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png'
              height='40'
              alt=''
              loading='lazy'
            />
            <img
              src='https://c7.uihere.com/files/203/252/853/python-javascript-programming-language-c-others.jpg'
              height='40'
              alt=''
              loading='lazy'
            />
            </MDBNavbarBrand>
            <h3 style={{color: "gray"}}> React and Flask App </h3>
            
            {pathname === "/" || pathname === null ? (
              <MDBNavbarLink href='/create'>
              <button class="btn btn-success w-100">Add New Data</button>
              </MDBNavbarLink>
           )
              : (<MDBNavbarLink href='/'>
                <button class="btn w-100" style={{backgroundColor: "#b23cfd", color: "white"}}>Home</button>
              </MDBNavbarLink>)}
      </MDBContainer>
    </MDBNavbar>
  );
}
