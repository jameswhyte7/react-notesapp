import React,  { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'react-uuid';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import Notes from './components/Notes';

function App() {

  const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []);

  const [activeNote, setActiveNote] = useState(false);

  useEffect(()=>{
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () =>{
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now()
    };
    
    setNotes([newNote,...notes])
  };

  
  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note)=>{
      if(note.id === activeNote){
        return updatedNote;
      }
      return note;
    });

    setNotes(updatedNotesArray);
  }

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note)=>note.id !== idToDelete))
  };
  
  const getActiveNote = () => {
    return notes.find((note)=> note.id === activeNote);
  }

  return (
      <>
        <Header/>

        <div className='All'>
          <div className='row'>

            <div className='col-md-4'>
              <Notes 
              notes={notes}
              onAddNote={onAddNote}
              onDeleteNote={onDeleteNote}
              activeNote={activeNote}
              setActiveNote={setActiveNote}
              />
            </div>

            <div className='col-md-8'>
              <Note activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>
            </div>

          </div>
        </div>

        <Footer/>
      </>
  );
}

export default App;
