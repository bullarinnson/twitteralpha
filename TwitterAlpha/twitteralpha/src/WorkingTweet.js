import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';

function SingleTweet(avatar, displayName, username, text, image) {
  return (
    <div className="post">
      <div className="ppictur">
        <Avatar src={avatar} />
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
        <img src={image} alt="" />
        <div className="post_footer">
          <ChatBubbleOutlineIcon />
          <RepeatIcon />
          <FavoriteBorderIcon />
          <PublishOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default SingleTweet;

/* <Post
        avatar={single.profilePicture}
        displayName={single.name}
        username={single.userName}
        text={single.post}
        image={single.image}
      /> */
