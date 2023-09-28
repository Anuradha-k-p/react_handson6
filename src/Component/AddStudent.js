import React, { useContext } from "react";
import Store from "../Store/Store";
import { useNavigate } from "react-router-dom";
import "./Style.css"




function Addstudent(){
  const [StoreData]= useContext(Store);
  const Navi=useNavigate();
        
const StudentData={
    Name:"",
    Age:"",
    Course:"",
    Batch:""

}
console.log(StudentData)

const  handleChange=(e)=>{
    StudentData[e.target.name]=e.target.value

}

 const handleSubmit=()=>{
StoreData.push(StudentData)
 Navi("/student");
}
return(
    <>
    
    <div className="p1">
        <h1>Add Student</h1>
        <div className="c1">

        <label  />
        <input type="text" name="Name" placeholder="Enter your name" onChange={handleChange}/>

        <label />
        <input type="number"  name="Age" placeholder="Enter your age" onChange={handleChange}/>

        </div>
        <div className="c1">
        <label  />
        <input type="text"  name="Course" placeholder="Enter your course" onChange={handleChange}/>

        <label  />
        <input type="text"  name="Batch" placeholder="Enter your batch" onChange={handleChange}/>
        </div> 
    </div>


       <div id="btns">
        <button onClick={()=>Navi("/student")}>Go Back</button>
        <button onClick={handleSubmit}>Update</button>
        </div>
    </>
)

    
}
export default Addstudent
