import React, { useState } from "react";

function CreateArea(props) {
  const [notes, setNotes] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;

    setNotes((prevValue) => {
      return { ...prevValue, [name]: value }; // adding title and content to each note
    });
  }

  function AddNote(event) {
    props.addClicked(notes);
    setNotes({ title: "", content: "" }); // clearing the title and content after it has been added
    event.preventDefault(); // stops the page from refreshing when Add button is clicked
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          value={notes.title}
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={notes.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={AddNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
