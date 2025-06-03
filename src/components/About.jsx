import React from "react";

// Displays the blog logo and a short description. Image & about passed as props
// Use a default image if image isn't provided
function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
