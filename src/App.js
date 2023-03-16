import React, { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";



function App() {
  const[notes, setNotes] = useState([])
  
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  
  return(
    
 <div>
        <Form onAdd = {addNote} />
      <br></br><br></br>
      <h1>-------------------------- SCROLL DOWN TO SEE SUBMISSION -------------------------</h1>
      {notes.map((noteItem, index) => {
        return(
          <Table
             key={index}
            id={index}
            FirstName={noteItem. fName}
            lastName={noteItem.lName}
            email={noteItem. email}
            phoneNum={noteItem.phNum}
            onDelete = {deleteNote}
 />

        )
      })}
     

      

  </div>
  

    
  );
}

export default App;
