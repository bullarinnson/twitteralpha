import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Tweet from '../style/Tweet.css';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [single, setSingle] = useState({});
  const { id } = useParams()
  const [commentId, setCommentId] = useState(0);
  const [data, setData] = useState({
    Name: "Superman",
    UserName: "sups",
    ProfilePicture: "https://i.pinimg.com/originals/f6/72/92/f6729212000bef88bc2a987090327126.jpg",
    Content: "",
    UserId: id,
    Image: "",
    User: null
  });

  useEffect(() => {
    localStorage.setItem("user_id", id)
    axios.get(`https://localhost:44368/api/users/${id}`).then((res) => {
      // console.log(res.data, "list of heroes  ");
      setSingle(res.data);
    });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata, "here we go");
  }

  function submit(e) {
    var newId = localStorage.getItem("user_id")
    // sconsole.log(commentId)
    window.location.reload(false);
    axios.post("https://localhost:44368/api/comments", {
      content: data.Content,
      name: data.Name,
      userName: data.UserName,
      profilePicture: data.ProfilePicture,
      image: data.Image,
      userId: parseInt(newId, 10),
      user: data.User
    })
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>
      <ChatBubbleOutlineIcon onClick={handleClickOpen} />
      <Dialog className="margin" fullWidth open={open} onClose={handleClose}>
        <DialogContent className="hello">
          <DialogContentText>
            <div className="post-2">
              <div className="ppictur-2">
                <Avatar src={single.profilePicture} />
              </div>
              <div className="post_body-2">
                <div className="post_header-2">
                  <div className="post_headerText-2">
                    <h3>
                      {single.name}<VerifiedIcon className="post_badge" />
                      <div className="post_headerSpecial-2">
                        @{single.userName}
                      </div>
                    </h3>
                  </div>
                  <div className="post_headerDesription-2">
                    <p className="hello2">{single.post}</p>
                  </div>
                </div>
                <img src={single.image} className="stylingimg2" alt="" />
              </div>
            </div>
            <div className="post-3">
              <div className="ppictur-2">
                <Avatar src={data.ProfilePicture} />
              </div>
              <div className="post_body-2">
                <div className="post_header-2">
                  <div className="post_headerText-2">
                    <h3>
                      {data.Name}<VerifiedIcon className="post_badge" />
                      <div className="post_headerSpecial-2">
                        @{data.UserName}
                      </div>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </DialogContentText>
          <TextField
            onSubmit={(e) => submit(e)}
            className="commentput"
            autoFocus
            id="Content"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => handle(e)}
            value={data.Content}
            onKeyPress={event => event.key === "Enter" && submit()}
            Button
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
