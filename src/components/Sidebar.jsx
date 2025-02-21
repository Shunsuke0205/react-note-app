import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>note</h1>
        <button>add</button>
      </div>
      <div className="app-sidebar-notes">
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
