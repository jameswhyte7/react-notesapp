import React from 'react';
import '../App.css'


const Note = ({activeNote, onUpdateNote}) => {

    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now(),
        });
    };

    if(!activeNote) return <div className='no-active-note'>No Note selected</div>

    return (
        <div className='note-container'>
            <div className='Brand'>
                <input type='text' id='title' value={activeNote.title} onChange={(e)=>onEditField("title", e.target.value)} autoFocus/>
            </div>
            <textarea 
            placeholder='Note something down...' 
            id="body" value={activeNote.body} 
            onChange={(e)=>onEditField("body", e.target.value)}>

            </textarea>
        </div>
    );
}

export default Note;
