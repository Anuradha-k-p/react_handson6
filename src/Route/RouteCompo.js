import React, { useState } from "react";
import {BrowserRouter, Routes,Route, NavLink} from "react-router-dom"
import Home from "../Component/Home";
import Student from "../Component/Student";
import Contact from "../Component/Contact";
import Store from "../Store/Store";
import EditStudent from "../Component/EditStudent";
import Addstudent from "../Component/AddStudent";
import "./Route.css"



const RouteCp = () => {
    const [data,setData] = useState([
        {name: "John", age: "25", course: "MERN", batch: "Oct"},
        {name: "Doe", age: "25", course: "MERN", batch: "Jan"},
        {name: "Biden", age: "25", course: "MERN", batch: "Nov"},
        {name: "Barar", age: "25", course: "MERN", batch: "Spt"},
        {name: "Christ", age: "25", course: "MERN", batch: "Dec"},
    ])

    // console.log(data)

    return(
        <>
        <BrowserRouter>
        <div className="main">
        <NavLink to= '/' className="child">Home</NavLink>
        <NavLink to= '/student' className="child">Student</NavLink>
        <NavLink to= '/contact'className="child">Contact</NavLink>
        </div>

        <Routes>
             
             <Route  path='/'  element ={ <Home></Home>}/>

             <Route path='/student'  element ={ <Store.Provider value = {{Studata : data, datafunc : setData}}>
               <Student></Student>
             </Store.Provider>}/>

             <Route  path='/contact'  element ={ <Contact></Contact>}/>

             <Route path='/editstudent' element={ <Store.Provider value = {{Studata : data, datafunc : setData}}>
               <EditStudent></EditStudent>
             </Store.Provider>


             }/>
             <Route path="/newstudent" element={ 
             <Store.Provider value = {{Studata : data, datafunc : setData}}>
            <Addstudent></Addstudent>
           </Store.Provider>}/>


        </Routes>
        
        
        </BrowserRouter>
        
        </>
    )

}
 export default RouteCp