import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {Notes.map((notes) => (
        <Note key={notes.id} title={notes.title} content={notes.content} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
