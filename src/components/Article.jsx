import React from "react";

// Article displays a single blog post preview
// Props are title, date, preview, & minutes for the bonus
function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Display bento/coffee emoji based on reading time
  let emoji = "";
  if (minutes < 30) {
    // 1 coffee for every 5 minutes, rounded up
    emoji = "☕️".repeat(Math.ceil(minutes / 5));
  } else {
    // 1 bento box for every 10 minutes, rounded up
    emoji = "🍱".repeat(Math.ceil(minutes / 10));
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} - {emoji} {minutes} minute read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
