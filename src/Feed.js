import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./css/Feed.css";
import Fire from "./firebase";
import FlipMove from "react-flip-move";
import { Column, Row } from 'simple-flexbox';

function Feed() {
  const db = Fire.firestore();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <Column>
    <Row flexGrow={1} breakpoints={{ 768: 'column' }}>
      <div className="feed">
        <div className="feed__header">
          <h2>Home</h2>
        </div>

        <TweetBox />

        <FlipMove>
          {posts.map((post) => (
            <Post
              key={post.text}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
              video={post.video}
            />
          ))}
        </FlipMove>
      </div>
      
    </Row>
    </Column>
  );
}

export default Feed;
