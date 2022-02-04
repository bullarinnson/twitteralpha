import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../style/Post.css';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import axios from 'axios';
import { Router } from 'react-router';
import { useNavigate } from 'react-router-dom';

function Post({ postId, avatar, displayName, username, text, image }) {
  const navigate = useNavigate()
  const objectToPass = {
    postId, avatar, displayName, username, text, image
  }

  const showSingleData = (value) => {
    navigate(`/tweet/${value.postId}`)
    console.log(value)
  }
  return (
    <div className="post">
      <div className="ppictur">
        <Avatar src={avatar} sx={{ width: 56, height: 56 }} />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>
              {displayName}
              <span className="post_headerSpecial">
                <VerifiedIcon className="post_badge" />
                @{username}
              </span>
            </h3>
          </div>
          <div className="post_headerDesription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} className="stylingimg" alt="" />
        <div className="post_footer">
          <ChatBubbleOutlineIcon onClick={() => showSingleData(objectToPass)} />
          <RepeatIcon />
          <FavoriteBorderIcon />
          <PublishOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;

// export async function getStaticProps() {
//   try {
//     const response = await axios.get('https://localhost:44368/api/users/');
//     return {
//       props: { user: response.data }
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }
