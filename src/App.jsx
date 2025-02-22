import './App.css'
import { useState } from 'react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import uuid from "react-uuid";

function App() {

  const [notes, setNotes] = useState([]);
  const [activeNoteId, setActiveNoteId] = useState(null);

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
  }

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        notes={notes}
        onDeleteNote={onDeleteNote}
        activeNoteId={activeNoteId}
        setActiveNoteId={setActiveNoteId}
      />
      <Main />
    </div>
  );
}

export default App;
