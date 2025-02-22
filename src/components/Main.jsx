import React from "react";
import "./Main.css";

const Main = ({ activeNote, onUpdateNote }) => {
  if (!activeNote) {
    return <div className="no-active-note">
      note is not selected.
    </div>
  }

  const onEditNote = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      modifiedDate: Date.now(),
    });
  }

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          id="title"
          type="text"
          value={activeNote.title}
          onChange={(e) => onEditNote("title", e.target.value)} 
        />
        <textarea
          id="content"
          name=""
          placeholder="write a note!"
          value={activeNote.content}
          onChange={(e) => onEditNote("content", e.target.value)} 
        ></textarea>

      </div>

      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <div className="markdown-preview">{activeNote.content}</div>
      </div>

    </div>
  );
}

export default Main;
