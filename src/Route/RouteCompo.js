import React, { useState } from "react";
import {BrowserRouter, Routes,Route, NavLink} from "react-router-dom"
import Home from "../Component/Home";
import Student from "../Component/Student";
import Contact from "../Component/Contact";
import Store from "../Store/Store";

import Addstudent from "../Component/AddStudent";
import "./Route.css"
import Editstudent from "../Component/EditStudent";



function RouteCp(){
    const[Data,setData]=useState([

        {Name:"Jhon",Age:25,Course:"MERN",Batch:"oct"},
        {Name:"Doe",Age:25,Course:"MERN",Batch:"Nov"},
        {Name:"Biden",Age:25,Course:"MERN",Batch:"Dec"},
        {Name:"Barar",Age:25,Course:"MERN",Batch:"Jan"},
        {Name:"Christ",Age:25,Course:"MERN",Batch:"Jan"},
        
        
    ]);
return(
    <>
<BrowserRouter>
<div className="main">
<NavLink to="/" className="child">Home</NavLink>
<NavLink to="/student"  className="child">Student</NavLink>
<NavLink to="/contact"  className="child">Contact Us</NavLink>
</div>



<Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/student" element={
        <Store.Provider value={[Data,setData]}>
               <Student/>
        </Store.Provider>
    }></Route>

    <Route path="/contact" element={<Contact/>}></Route>

    <Route path="/editstudent" element={
        <Store.Provider value={[Data,setData]}>
            <Editstudent/>
         </Store.Provider>
   }></Route>

<Route path="/addstudent" element={
    <Store.Provider value={[Data,setData]}>
    <Addstudent/>
</Store.Provider>
}></Route> 
</Routes>

</BrowserRouter>





    </>
)
}
export default RouteCp
