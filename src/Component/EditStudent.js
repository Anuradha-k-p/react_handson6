import React, { useContext } from "react";
import {   useNavigate,useLocation} from "react-router-dom";
import Store from "../Store/Store";
import "./Style.css"


const EditStudent = () =>{
    const Navigate = useNavigate();
    const DataIndex = useLocation().state.index;

    const ContextData = useContext(Store);

const Updatedata = {
    Name : ContextData.Studata[DataIndex].Name,
    Age :  ContextData.Studata[DataIndex].Age,
    Course :  ContextData.Studata[DataIndex].Course,
    Batch :  ContextData.Studata[DataIndex].Batch
}



    function handleChange(e){
       Updatedata[e.target.name] = e.target.value;
    }

    function handleUpdate(){
        console.log(ContextData.Studata[DataIndex]);
        ContextData.Studata[DataIndex] = Updatedata;
        Navigate('/student')

        
    }
  return(
    <>
    <h1>EDIT STUDENT</h1>
    <label htmlFor="name">Name :  </label>
    <input type="text" id="name" name="Name" placeholder="enter name" onClick={handleChange}/><br/>
    <label>Age :  </label>
    <input type="number" name="Age" placeholder="enter age" onClick={handleChange}/><br/>
    <label>Course :  </label>
    <input type="text" name="Course" placeholder="enter course" onClick={handleChange}/><br/>
    <label>Batch :  </label>
    <input type="text" name="Batch" placeholder="enter batch" onClick={handleChange}/><br/>

<div className="main1"> 
     <button className="child2" onClick={handleUpdate}> Upadate Student</button>
    <button className="child2" onClick={()=> Navigate('/student')}>  Go Back</button>
    </div>
    </>
  )



}
export default EditStudent