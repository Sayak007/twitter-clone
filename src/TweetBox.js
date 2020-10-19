import React, { useState,useEffect } from "react";
import "./css/TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import Fire from "./firebase";

function TweetBox() {
  const db = Fire.firestore();
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [tweetVideo, setTweetVideo] = useState("");
  const [userdetails, setUserDetails] = useState("");
  const [user1, setUser] = useState("");
  const [docid, setDocID]=useState("");

  useEffect(() => {
    // Your code here
    Fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setUser(Fire.auth().currentUser.email );
        console.log(Fire.auth().currentUser.email);
        //localStorage.setItem('user', user.uid);
      } else {
        //localStorage.removeItem('user');
      }
    });
    const res = db.collection('profiles').where('email',"==",user1).get();
    res.then(snapshot => {

      var cache={}
      snapshot.forEach(doc => {
          cache[doc.id] = doc.data()
          setDocID(doc.id);
          setUserDetails(cache[doc.id].image)
      });
    });
  },);

  const sendTweet = (e) => {
    e.preventDefault();
    console.log(user1);
    //var
    var cache = {}
    const res = db.collection('profiles').where('email',"==",user1).get();
    res.then(snapshot => {

      
      snapshot.forEach(doc => {
          cache[doc.id] = doc.data()
          setDocID(doc.id);
          db.collection("posts").add({
            displayName: cache[doc.id].displayname,
            username: cache[doc.id].username,
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            video: tweetVideo,
            avatar: cache[doc.id].image,
              //"https://pbs.twimg.com/profile_images/1144517764838617088/TjJRCx-k_400x400.jpg",
          });
      });
    });

    console.log(cache);

    

    setTweetMessage("");
    setTweetImage("");
    setTweetVideo("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={userdetails} />
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
        <input
          value={tweetVideo}
          onChange={(e) => setTweetVideo(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter video URL"
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
