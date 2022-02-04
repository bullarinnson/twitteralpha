import { Avatar } from '@mui/material';
import React from 'react';
import '../style/Post.css';
import VerifiedIcon from '@mui/icons-material/Verified';

function Comments({ avatar, displayName, username, text, image }) {
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
        <img src={image} className="stylin" alt="" />
      </div>
    </div>
  );
}

export default Comments;
