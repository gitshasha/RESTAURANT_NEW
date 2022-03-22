import React, { useContext, useState } from "react";
import axios from "axios";
function Addfood() {
  const [img, setimg] = useState("");
  const [names, setnames] = useState("");
  function changed(e) {
    setimg(e.target.files[0]);
  }
  function namechange(e) {
    setnames(e.target.value);
  }
  function eventhand(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profileImg", img);
    formData.append("name", names);
    axios
      .post("http://localhost:5000/api/Restaurant", formData, {})
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <div>
      <input type="file" onChange={changed} />
      <input
        type="text"
        name="name"
        id=""
        placeholder="name"
        onChange={namechange}
        value={names}
      />
      <button onClick={eventhand}>submit</button>
    </div>
  );
}

export default Addfood;
