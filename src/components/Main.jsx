import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" />
        <textarea name="" id="" placeholder="write a note!"></textarea>

      </div>

      <div className="app-main-note-preview">
        <h1 className="preview-title">the title</h1>
        <div className="markdown-preview">the content in Markdown</div>
      </div>

    </div>
  );
}

export default Main;
