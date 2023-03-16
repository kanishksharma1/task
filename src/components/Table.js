import { react } from "react";

function Table (props){
    function handleClick() {
        props.onDelete(props.id);
      }
      
    return(
<>

<br></br><br></br>


  <table class ="border text-black  ">
<tr>
  <th class ="border text-black  ">First Name</th>
  <th class ="border text-black  ">Last Name</th>
  <th class ="border text-black  ">email</th>
  <th class ="border text-black  ">Phone Number</th>
</tr>
<tr>
  <td class ="border text-black  ">{props.FirstName}</td>
  <td class ="border text-black  ">{props.lastName}</td>
  <td class ="border text-black  ">{props.email}</td>
  <td class ="border text-black  ">{props.phoneNum}</td>
</tr>
</table>
<br></br><br></br>
<button onClick={handleClick}>DELETE</button>
</>
    )
}

export default Table;
