import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import authService from "../appwrite/auth";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import {Button} from '../components/index'

function AllPosts() {
  const authstatus = useSelector((state) => {
    state.auth.status;
  });
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
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
  } else 
  if (posts.length === 0) {
      return (
        <div className="w-full py-8 mt-4 text-center">
          <Container>
            <div className="flex flex-wrap">
              <div className="p-2 w-full">
                <h1 className="text-2xl font-bold hover">
                  oops, no post found!
                </h1>
                <Link to="/add-post">
                  <Button className=""> Add Post</Button>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      );
    }
    return (
      <div className="w-full py-8">
        <Container>
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }

export default AllPosts;
