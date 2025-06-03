import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

// App is the root component and assembles the blog page layout, brings it all together
// Passes the blog data down to the child components by their props

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
