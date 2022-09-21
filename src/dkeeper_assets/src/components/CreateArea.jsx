import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';



function CreateArea({ add }) {
  const [formData, setFormData] = useState({
    title: "",
    content: ""
  });
  const [isClicked, setClicked] = useState(false);

  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  function handleClick(e) {
    add(formData);
    setFormData({
      title: "",
      content: ""
    });
    setClicked(false);
    e.preventDefault();
  }

  function handleExpand() {
    setClicked(true);
  }

  return (
    <div>
      {isClicked === false ?
        <form className="create-note">
          <textarea
            name="content"
            placeholder="Take a note..."
            rows="1"
            onChange={handleChange}
            value={formData.content}
            onClick={handleExpand}
          />
        </form>
        :
        <form className="create-note">
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={formData.title}
          />
          <textarea
            name="content"
            placeholder="Take a note..."
            rows="3"
            onChange={handleChange}
            value={formData.content}
          />
          <Zoom in={true}>
            <Fab className="button" onClick={handleClick}>
              <AddIcon />
            </Fab>
          </Zoom>
        </form>

      }

    </div>
  );
}

export default CreateArea;
