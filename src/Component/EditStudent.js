import React, { useContext } from "react";
import {   useNavigate,useLocation} from "react-router-dom";
import Store from "../Store/Store";
import "./Style.css"


function Editstudent(){
  const Navigate=useNavigate();

  const LocationData=useLocation();

  const indexData=LocationData.state.index;

  const [StoreData]=useContext(Store)




  const StudentData={
      Name:StoreData[indexData].Name,
      Age:StoreData[indexData].Age,
      Course:StoreData[indexData].Course,
      Batch:StoreData[indexData].Batch
  
  }
 
  
  const  handleChange=(e)=>{
      StudentData[e.target.name]=e.target.value
  
  }
  
   const handleSubmit=()=>{
  StoreData[indexData]=StudentData;
     Navigate(-1);
  }
  return(
    <>
    
    <div className="p1">
        <h1>Edit Student</h1>
        <div className="c1">

        <label  />
        <input type="text" name="Name" placeholder="Enter your name" onChange={handleChange}/>

        <label />
        <input type="number" name="Age" placeholder="Enter your age" onChange={handleChange}/>

        </div>
        <div className="c1">
        <label />
        <input type="text"  name="Course" placeholder="Enter your course" onChange={handleChange}/>

        <label />
        <input type="text" name="Batch" placeholder="Enter your batch" onChange={handleChange}/>
        </div> 
    </div>


       <div id="btns">
        <button onClick={()=> Navigate("/student")}>Go back</button>
        <button onClick={handleSubmit}>Update</button>
        </div>
    </>
  )
   }
   export default Editstudent
