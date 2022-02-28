import React, { useState,useEffect } from 'react'
const tabs = ["posts", "comments", "albums"];
export default function Content() {
    const [title, setTitle] = useState('')
    const [posts,setPosts] = useState([])
    const [type, setType] = useState('posts');

    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(posts => {
          setPosts(posts);
      })
    },[type])
   

  return (
    <div>
      noi dung 1
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => {
            setType(tab);
          }}
        >
          {tab}
        </button>
      ))}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
          
        ))}
      
      </ul>
    </div>
  );
}
