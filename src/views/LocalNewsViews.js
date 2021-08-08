import React, { useEffect, useState } from 'react';
import LocalNews from '../components/LocalNews';

const LocalNewsViews = (props) => {
  
const [notes, setNotes] = useState([]);
//const [noteEditing, setNoteEditing] = useState("");

  
const addNote = (e) => {
  e.preventDefault();
  const newNote = {
    id: Math.random().toString(36).substr(2, 9),
    text: e.target.note.value,
  };
  setNotes([...notes, newNote]);
  e.target.note.value = "";
  };
  
//save notes in local storage
  useEffect(() => {
    const json = JSON.stringify(notes);
    localStorage.setItem("notes", json);
  }, [notes]);

//load notes from local storage
  useEffect(() => {
    const json = localStorage.getItem("notes");
    const savedNotes = JSON.parse(json);
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
    return ( 
      <React.Fragment>
        
        <h2 className="card-title">LocalStorage News</h2>
<div className="col-lg-4 estilo-cards-home">
<div className="card card-bonini-link" >
          
<div className="card-body">
<h2>Create a Local News Story on your Browser</h2>
<form onSubmit={addNote}>
  <input type="text" name="note" />
  <input type="submit" />
              </form>
              </div>
      <p>        
      {
                notes.map((note) =>
                  <LocalNews
                    key= {note.id}
                    title= {note.text}
                  />
              )}
              </p>
              

          </div>
        </div>
      
</React.Fragment>

 );

}

export default LocalNewsViews;