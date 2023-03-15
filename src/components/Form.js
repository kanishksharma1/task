/*
import { react, useState } from "react";

function Form( ) {

  const [data, setdata] = useState(
    {
      fname: "",
      lname:""
    }
  )
  const [text, setText] = useState("")

  function handleChange (event){
    setdata(event.target.value)
  }

  function handleClick(event) {
    setText(data)
    event.preventDefault();
  }
    return(
     
        <>
        <form  onSubmit={handleClick} >
        <div class="h-full w-6/12 fixed top-0 overflow-x-hidden pt-5 left-0">
  <div class="absolute text-center top-1/2 ">
  <label class = "pl-9">First Name : </label>
  <input  value = {data.fname} onChange ={handleChange} type={Text} placeholder="fname"></input>
  <br></br><br></br>
  <label class = "pl-9">Last Name : </label>
  <input type={Text} placeholder="lname"></input>
  <br></br><br></br>
  <label class = "pl-9">User Name : </label>
  <input type={Text} placeholder="User name"></input>
  <br></br><br></br>
  <label>E Mail :</label>
  <input type={"email"} placeholder="User name"></input>
  <br></br><br></br>
  <button type="submit" value="submit"> submit  </button>

  </div>
</div>
</form>

<div class="h-full w-6/12 fixed top-0 overflow-x-hidden pt-5 right-0">
  <div class="absolute text-center top-1/2  ">
    <table>
  <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>email</th>
  </tr>
  <tr>
    <td>{text}</td>
    <td>l name</td>
    <td>email</td>
  </tr>
</table>
  </div>
</div>
        </>
    )
}

export default Form;
*/