import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesList, setnotesList] = useState([]);

  function createNote(note) {
    setnotesList((prevValue) => {
      return [...prevValue, note]; // add new notes to the array
    });
  }

  function DeleteNote(id) {
    setnotesList((prevItems) => {
      return prevItems.filter((notesList, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addClicked={createNote} />

      {notesList.map((eachNote, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={eachNote.title}
            content={eachNote.content}
            delete={DeleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
