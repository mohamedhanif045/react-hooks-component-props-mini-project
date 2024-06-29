import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const displayReadTime = (minutes) => {
    const coffee = Math.ceil(minutes / 5);
    const bento = Math.ceil(minutes / 10);
    if (minutes < 30) {
      return "☕️".repeat(coffee) + ` ${minutes} min read`;
    } else {
      return "🍱".repeat(bento) + ` ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <small>{displayReadTime(minutes)}</small>
    </article>
  );
}

export default Article;
