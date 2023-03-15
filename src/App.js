import React, { useState } from "react";


function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
    phNum: ""
  });
 

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email,
          phNum: prevValue.phNum
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email,
          phNum: prevValue.phNum
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value,
          phNum: prevValue.phNum
        };
      }
       else if (name === "phNum") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: prevValue.email,
          phNum: value
        };
      }
    });
  }

  




  return (
    <div className="container">
    
      <form autoComplete="off">
        <input
          onChange={handleChange}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <br></br><br></br>
        <input
          onChange={handleChange}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <br></br><br></br>
        <input
        type={"email"}
          onChange={handleChange}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <br></br><br></br>
        <input
        type={"number"}
          onChange={handleChange}
          value={contact.phNum}
          name="phNum"
          placeholder="Phone Num"
        />
        <br></br><br></br>
        <button>Submit</button>
      </form>
      
      <br></br><br></br>
  
    <table class ="border text-black  ">
  <tr>
    <th class ="border text-black  ">First Name</th>
    <th class ="border text-black  ">Last Name</th>
    <th class ="border text-black  ">email</th>
    <th class ="border text-black  ">Phone Number</th>
  </tr>
  <tr>
    <td class ="border text-black  ">{contact.fName}</td>
    <td class ="border text-black  ">{contact.lName}</td>
    <td class ="border text-black  ">{contact.email}</td>
    <td class ="border text-black  ">{contact.phNum}</td>
  </tr>
</table>
<br></br><br></br>

  </div>
  

    
  );
}

export default App;
