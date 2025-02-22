import './App.css'
import { useEffect, useState } from 'react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import uuid from "react-uuid";

function App() {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes in storage")) || []);
  const [activeNoteId, setActiveNoteId] = useState(null);

  useEffect(() => {
    // save notes to local storage
    localStorage.setItem("notes in storage", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    console.log('add node');
    const newNote = {
      id: uuid(),
      title: "title of the note",
      content: "content of the note",
      modifiedDate: Date.now(),
    };
    setNotes([newNote, ...notes]);
    console.log(notes);
  };

  const onDeleteNote = (deletingId) => {
    const filteredNotes = notes.filter((note) => note.id !== deletingId); // filter() leaves the elements that pass the condition, note.id is not equal to deletingId.
    setNotes(filteredNotes);
  };

  const getActiveNote = () => {
    const activeNote = notes.find((note) => note.id === activeNoteId);
    return activeNote;
  };

  const onUpdateNote = (updatedNote) => {
    // update
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        console.log('updated note', updatedNote);
        return updatedNote;
      } else {
        return note;
      }
    });

    setNotes(updatedNotesArray);
    console.log('updated notes array', updatedNotesArray);
  };

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        notes={notes}
        onDeleteNote={onDeleteNote}
        activeNoteId={activeNoteId}
        setActiveNoteId={setActiveNoteId}
      />
      <Main
        activeNote={getActiveNote()}
        onUpdateNote={onUpdateNote}
      />
    </div>
  );
}

export default App;
