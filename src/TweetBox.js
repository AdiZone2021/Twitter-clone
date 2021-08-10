import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("props").add({
      displayName: "Adilet Tabyldyev",
      username: "AdiZone",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/react-wallpaper-74d74.appspot.com/o/9722A1C4-C635-4988-B564-1CE9CA7D2897.jpeg?alt=media&token=7db86a05-ad27-4641-a9d6-f7572c826458",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://firebasestorage.googleapis.com/v0/b/react-wallpaper-74d74.appspot.com/o/9722A1C4-C635-4988-B564-1CE9CA7D2897.jpeg?alt=media&token=7db86a05-ad27-4641-a9d6-f7572c826458" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
