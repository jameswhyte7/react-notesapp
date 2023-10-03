import React from 'react';
import { FaRegTrashAlt, FaPlus } from "react-icons/fa";
import '../App.css'

const Notes = ({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }) => {

    const sortedNotes = notes.sort((a, b)=> b.lastModified- a.lastModified)

    return (

        <>
            <div className='d-flex mb-3'>
                <h3>Notes</h3>
                <button onClick={onAddNote}>
                    <div className='Plus'>
                        <FaPlus color="beige" size="20px" />
                    </div>
                </button>
            </div>
            {
                sortedNotes.map((note) => (
                    <div className={`notes-container ${note.id === activeNote && "active"}`}  onClick={()=>setActiveNote(note.id)}>
                        <div>
                            <div className='Container-Edit-Delete'>
                                <small>{note.title}</small>
                                <div className='Edit-Delete'>
                                    <button onClick={() => onDeleteNote(note.id)}>
                                        <FaRegTrashAlt color="black" size="28px" />
                                    </button>
                                </div>
                            </div>
                            <p>{note.body && note.body.substr(0,100) + "..."}</p>
                            <small className='note-meta'>Last Modified {new Date(note.lastModified).toLocaleDateString("en-GB", {
                                hour: "2-digit",
                                minute: "2-digit"
                            })}</small>
                        </div>
                    </div>
                ))
            }
        </>

// 'notes-container'


    );
}

export default Notes;
