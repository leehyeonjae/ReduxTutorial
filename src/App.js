import React from "react";
import { Routes, Route } from "react-router-dom";
import { PostsList } from "./features/posts/PostsList";
import { AddPostForm } from "./features/posts/AddPostForm";
import { Navbar } from "./app/Navbar";
import { SinglePostPage } from "./features/posts/SinglePostPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <AddPostForm />
              <PostsList />
            </>
          }
        />
        <Route exact path="/posts/:postId" element={<SinglePostPage />} />
      </Routes>
    </>
  );
}

export default App;
