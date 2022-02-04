import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VerifiedIcon from '@mui/icons-material/Verified';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import { useParams } from 'react-router-dom';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import './style/SingleTweet.css'
import Tweet from './components/Tweet';
import Comments from './components/Comment';

function SingleTweet() {
  const [count, setCount] = useState(0)
  const [single, setSingle] = useState({})
  const [coms, setCom] = useState([])
  const { id } = useParams()
  useEffect(() => {
    axios.get(`https://localhost:44368/api/users/${id}`).then((res) => {
      console.log(res.data.comments, "list of heroes  ");
      setSingle(res.data);
      setCom(res.data.comments)
    });
  }, []);
  // useEffect(() => {
  //   axios.get(`https://localhost:44368/api/comments/${id}`).then((res) => {
  //     console.log(res.data);
  //     // setCom(res.data);
  //   });
  // }, []);
  const icon = document.getElementById("Dark");
  function DarkM() {
    document.body.classList.toggle("dark-theme");
  }
  return (
    <div className="app">
      <LeftSidebar />
      <div className="arnar">
        <div className="header">
          <h2>Home</h2>
          <DarkModeOutlinedIcon id="Dark" onClick={() => DarkM(icon)} />
        </div>
        <div className="post-1">
          <div className="ppictur-1">
            <Avatar src={single.profilePicture} sx={{ width: 56, height: 56 }} />
          </div>
          <div className="post_body-1">
            <div className="post_header-1">
              <div className="post_headerText-1">
                <h3>
                  {single.name}<VerifiedIcon className="post_badge" />
                  <div className="post_headerSpecial-1">
                    @{single.userName}
                  </div>
                </h3>
              </div>
              <div className="post_headerDesription-1">
                <p>{single.post}</p>
              </div>
            </div>
            <img src={single.image} alt="" />
            <div className="p_footer">
              <Tweet />
              <RepeatIcon onClick={() => { setCount(count + 1) }} />
              {count}
              <FavoriteBorderIcon />
              <PublishOutlinedIcon />
            </div>
          </div>
        </div>
        {/* {
          coms.map((singleComment) => {
            return (
              <div key={singleComment.id}>
                <p>Name: { singleComment.name }</p>
                <p>Content: { singleComment.content }</p>
                <p>Username: { singleComment.userName }</p>
                <p>
                  Image: <img src={singleComment.profilePicture} alt={singleComment.userName} />
                </p>
              </div>
            )
          })
        } */}
        {coms.map(singleComment => (
          <Comments
            postId={singleComment.id}
            avatar={singleComment.profilePicture}
            displayName={singleComment.name}
            username={singleComment.userName}
            text={singleComment.content}
            image={singleComment.image}
          />
        ))}
      </div>
      <RightSidebar />
    </div>
  )
}

export default SingleTweet;
