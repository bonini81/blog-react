import React, { useEffect, useState } from 'react';

const LocalNewsViews = (props) => {
  
const [notes, setNotes] = useState([]);
const [noteEditing, setNoteEditing] = useState('');

  // Add Note in state
const addNote = (e) => {
  e.preventDefault();
  const newNote = {
    id: Math.random().toString(36).substr(2, 9),
    text: e.target.note.value,
    title: e.target.content.value
  };
  setNotes([...notes, newNote]);
  e.target.note.value = '';
  e.target.content.value = '';
  };
  
//deleNote
  const deleteNote = (idToDelete) => {
    const filteredNotes = notes.filter((note) => note.id !== idToDelete);
    setNotes(filteredNotes);
  };

//save notes in local storage
  useEffect(() => {
    const json = JSON.stringify(notes);
    localStorage.setItem('notes', json);
  }, [notes]);

//Editing Notes
const submitEdits = (event, idToEdit) => {
  event.preventDefault();
  const updatedNotes = notes.map((note) => {
    if (note.id === idToEdit) {
      return {
        id: note.id,
        text: event.target.note.value,
        title: event.target.title.value
      };
    } else {
      return note;
    }
  });
  setNotes(updatedNotes);
  setNoteEditing('');
  };
  


  //load notes from local storage
  useEffect(() => {
    const json = localStorage.getItem('notes');
    const savedNotes = JSON.parse(json);
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);


  return (

  
    <>
      
      <div class="container local-news">
  <div class="row">
    

  <div className="col-lg-12">
       
            <h1 className="remote-news-title">LocalStorage News</h1>

<h2>Create a Local News Story on your Browser</h2>
        <form onSubmit={addNote}>
                <input type="text" name="note" placeholder="Post Title" />
                <p></p>
                <input type="text" name="content" placeholder="Post Content" />
                <p></p>
                <input type="submit" value="Send Post"  />
              </form>
              </div>
              </div>
        </div>    
           
       

          

       
        


            {notes.map((note) => (
         <div class="container">
         <div class="row">
                  <div className="col-lg-4 estilo-cards-home">
                  
       {
         note.id !== noteEditing ? (
         
                        <div className="card card-bonini-link" >
            
                          <div className="card-body">
                          <h2>{note.text} </h2>
     <div>{note.title}</div>
      </div>
        </div>
      ) : (
      <form onSubmit={(e) => submitEdits(e, note.id)}>
                 <textarea name="note" defaultValue={note.text}></textarea>
                 <textarea name="title" defaultValue={note.title}></textarea>
        <button type="Submit"> Submit Edits</button>
      </form>
    )}
    <button onClick={() => deleteNote(note.id)}>delete</button>
    <button onClick={() => setNoteEditing(note.id)}>edit</button>
                  </div>
                </div>
                </div>
))}    
        
 
    
      
</>
  
 );

}



export default LocalNewsViews;