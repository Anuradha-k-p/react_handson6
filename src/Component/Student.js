import React, { useContext }  from "react";
import Store from "../Store/Store";
import { NavLink, useNavigate } from "react-router-dom";
import "./Style.css"


 function Student() {
   
const data1 = useContext(Store);
const Nav = useNavigate();

    return(
        <>
        <div className="main1">
         <h1  className="child1">STUDENT PAGE</h1>
         <button  className="child1" id="but" onClick={() =>Nav('/newstudent')}>Add New Student</button></div>
         <table className="table">
            <thead>
                <tr>
                <td>Name</td>
                <td>Age</td>
                <td>Course</td>
                <td>Batch</td>
                <td>Change</td>
                </tr>
            </thead>
            <tbody>
                {data1.Studata.map((item,index) => {
                    return(
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.course}</td>
                            <td>{item.batch}</td>
                            <td><NavLink to='/editstudent' state={{index}}>Edit</NavLink></td>

                        </tr>
                    )

                })}
            </tbody>
         </table>
        
        </>
    )

 }
 export default Student