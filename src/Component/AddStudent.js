import React, { useContext } from "react";
import Store from "../Store/Store";
import { useNavigate } from "react-router-dom";
import "./Style.css"



const Addstudent = () =>{

    const StudentData= useContext(Store);
    console.log(StudentData)

    const Navi = useNavigate();

    const newStudent = {
        Name : '',
        Age : '',
        Course : '',
        Batch : ''
    }

    function handleChange(e){
     newStudent[e.target.name] = e.target.value
    }

    function clickHandle(){
        StudentData.Studata.push(newStudent)
        Navi('/student')
    }

    return(
        <>
        <h2>new student</h2>

     <label >Name :  </label>
    <input type="text" name="Name" placeholder="enter name" onClick={handleChange}/><br/>
    <label>Age :  </label>
    <input type="number" name="Age" placeholder="enter age" onClick={handleChange}/><br/>
    <label>Course :  </label>
    <input type="text" name="Course" placeholder="enter course" onClick={handleChange}/><br/>
    <label>Batch :  </label>
    <input type="text" name="Batch" placeholder="enter batch" onClick={handleChange}/><br/>

    <button onClick={clickHandle} >Add New Student</button>
        
        </>
    )

}
export default Addstudent