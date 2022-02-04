import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import '../style/Opinion.css';
import axios from 'axios';

function Opinion() {
  const url = "https://localhost:44368/api/users";
  const [data, setData] = useState({
    Name: "Superman",
    UserName: "sups",
    ProfilePicture: "https://i.pinimg.com/originals/f6/72/92/f6729212000bef88bc2a987090327126.jpg",
    Post: "",
  });
  function submit(e) {
    window.location.reload(false);
    axios.post(url, {
      Name: data.Name,
      UserName: data.UserName,
      ProfilePicture: data.ProfilePicture,
      Post: data.Post,
    })
      .then(res => {
        console.log(res.data);
      });
  }
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata, "here we go");
  }
  return (
    <div className="opinion">
      <form onSubmit={(e) => submit(e)}>
        <div className="input">
          <Avatar src="https://cdn.vox-cdn.com/thumbor/9lofqoBbROdznA0-CFHcoR94-Lk=/0x0:1280x640/1200x800/filters:focal(455x114:659x318)/cdn.vox-cdn.com/uploads/chorus_image/image/66967169/batman_keaton.0.jpg" />
          <input onChange={(e) => handle(e)} id="Post" value={data.Post} className="colorChange" placeholder="what the hell" type="text" />
        </div>
        <button className="tweet" onKeyPress={event => event.key === "Enter" && submit()}>Tweet</button>
      </form>
    </div>
  );
}

export default Opinion;
