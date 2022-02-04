import React, { useEffect, useState } from 'react';
import '../style/Feed.css';
import axios from 'axios';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Opinion from './Opinion';
import Post from './Post';

// useEffect(() => {
//   axios.get('https://localhost:44368/api/users').then(res => {
//     console.log(res.data);
//   });
// }, []);
function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('https://localhost:44368/api/users').then((response) => {
      console.log(response.data, "list of heroes  ");
      setPosts(response.data);
    });
  }, []);
  const icon = document.getElementById("Dark");
  function DarkM() {
    document.body.classList.toggle("dark-theme");
    // if (document.body.classList.contains("dark-theme")) {
    //   icon.src = { DarkModeOutlinedIcon };
    // } else {
    //   icon.src = { LightModeOutlinedIcon };
    // }
  }
  return (
    <div className="commentbox">
      <div className="header">
        <h2>Home</h2>
        <DarkModeOutlinedIcon id="Dark" onClick={() => DarkM(icon)} />
      </div>
      <Opinion />
      {posts.map(post => (
        <Post
          postId={post.id}
          avatar={post.profilePicture}
          displayName={post.name}
          username={post.userName}
          text={post.post}
          image={post.image}
        />
      )).reverse()}
    </div>
  );
}

export default Feed;
//  gekk ekki að fá takkan til að skipta á milli iconna
