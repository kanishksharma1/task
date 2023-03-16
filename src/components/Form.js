import { react, useState } from "react";
import  Skill  from "./Skill";


function Form(props) {

  const [note, setNote] = useState({
    fName: "",
    lName: "",
    email: "",
    phNum: ""
  });
 

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return{
        ...prevNote,
        [name]: value
      }
    });
    
  }
function submitNote(event) {
  props.onAdd(note);
  setNote({
    fName: "",
    lName: "",
    email: "",
    phNum: ""
  })
  event.preventDefault();
}


  return (
    <div className="container">    
      <form autoComplete="off">
        <input
          name="fName"
          onChange={handleChange}
          value={note.fName}
          placeholder="First Name"
        
        />
        <br></br><br></br>
        <input
          onChange={handleChange}
          value={note.lName}
          name="lName"
          placeholder="Last Name"
        />
        <br></br><br></br>
        <input
        type={"email"}
         required
          onChange={handleChange}
          value={note.email}
          name="email"
          placeholder="Email"
        />
        <br></br><br></br>
        <input
          type="text"
          onChange={handleChange}
          value={note.phNum}
          name="phNum"
          placeholder="Phone Num"
          inputMode="numeric"
          pattern="\d*"
          maxLength="10"
          minLength="10"
        />
        <br></br><br></br>

      <Skill />

        <button onClick={submitNote}>Submit</button>

        </form>

        <br></br>

</div>
  )}

export default Form;

