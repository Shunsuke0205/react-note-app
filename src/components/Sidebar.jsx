import React from "react";
import "./Sidebar.css";

const Sidebar = ({ onAddNote, notes, onDeleteNote, activeNoteId, setActiveNoteId }) => {

  // const sortedNotes = notes.toSorted((a, b) => b.modifiedDate - a.modifiedDate);
  notes.sort((a, b) => b.modifiedDate - a.modifiedDate);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>note</h1>
        <button onClick={onAddNote}>add</button>
      </div>

      <div className="app-sidebar-notes">
        {sortedNotes.map((note) => (
          <div className={`app-sidebar-note ${note.id === activeNoteId && "active"}`} key={note.id} onClick={() => setActiveNoteId(note.id)}>
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>delete</button>
            </div>
            <p>{note.content}</p>
            <small>last modified: {new Date(note.modifiedDate).toLocaleDateString("ja-JP", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })} </small>
          </div>  
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
