import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { dkeeper } from "./../../../declarations/dkeeper";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      dkeeper.createNote(newNote.title, newNote.content);
      return [newNote, ...prevNotes]
    });
  }

  useEffect(() =>{
    showList();
  }, []);

  async function showList(){
    const noteArray = await dkeeper.readNotes();
    setNotes(noteArray);
  }

  function deleteNote(id) {
    // console.log(id)
    setNotes((prevNotes) => {
      return prevNotes.filter((note, idx) => {
        dkeeper.removeNote(id);
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
