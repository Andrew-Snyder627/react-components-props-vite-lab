import React from "react";
import Article from "./Article";

// ArticleList renders a list of Article components based on the posts data
// Props is the posts array
function ArticleList({ posts }) {
  return (
    <main>
      {posts.map(
        (
          post // Create Article components for each post in the array
        ) => (
          <Article
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
            minutes={post.minutes}
          />
        )
      )}
    </main>
  );
}

export default ArticleList;
