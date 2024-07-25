import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Button, Container, PostCard } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


function Home() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status)

  const navigate= useNavigate()

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <>
        <button className="btn btn-square mb-8">
          <span className="loading loading-spinner"></span>
        </button>
      </>
    );
  } else {
    return (
<div className="hero bg-base-100 min-h-96 ">
  <div className="hero-content text-center">
    <div className="max-w-full">
      <h1 className="text-5xl font-bold">welcome to <p className="text-[#f97316]"> blogitup</p></h1>
      <p className="py-6">
      "Share your thoughts, stories, and ideas with the world effortlessly on our blog posting platform."
      </p>
      {authStatus ? (
      <button className="btn btn-primary" 
      onClick={()=>{navigate("/all-post")}}
      >Show all posts </button>
      ):
      <button className="btn btn-primary" 
      onClick={()=>{navigate("/login")}}
      >Show all posts | Login </button>}
    </div>
  </div>
</div>
    );
  }
}
export default Home;
