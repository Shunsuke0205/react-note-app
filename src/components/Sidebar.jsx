import React from "react";
import "./Sidebar.css";

const Sidebar = ({ onAddNote, notes, onDeleteNote }) => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>note</h1>
        <button onClick={onAddNote}>add</button>
      </div>

      <div className="app-sidebar-notes">
        {notes.map((note) => (
          <div className="app-sidebar-note" key={note.id}>
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

        <div className="app-sidebar-note">
          <div className="sidebar-note-title">
            <strong>title</strong>
            <button>delete</button>
          </div>
          <p>content</p>
          <small>last modified: xx/xx</small>
        </div>
        <div className="app-sidebar-note">
          <div className="sidebar-note-title">
            <strong>title</strong>
            <button>delete</button>
          </div>
          <p>content</p>
          <small>last modified: xx/xx</small>
        </div>
        <div className="app-sidebar-note">
          <div className="sidebar-note-title">
            <strong>title</strong>
            <button>delete</button>
          </div>
          <p>content</p>
          <small>last modified: xx/xx</small>
        </div>
        <div className="app-sidebar-note">
          <div className="sidebar-note-title">
            <strong>title</strong>
            <button>delete</button>
          </div>
          <p>content</p>
          <small>last modified: xx/xx</small>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
