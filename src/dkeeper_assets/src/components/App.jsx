import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    });
  }

  function deleteNote(id) {
    // console.log(id)
    setNotes((prevNotes) => {
      return prevNotes.filter((note, idx) => {
        return idx !== id
      })
    });
  }

  return (
    <div>
      <Header />
      <CreateArea add={addNote} />
      {notes.map((note, idx) => (
        <Note
          key={idx}
          id={idx}
          title={note.title}
          content={note.content}
          remove={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
