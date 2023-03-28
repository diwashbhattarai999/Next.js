import Link from "next/link";
import React from "react";

const firstPost = () => {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
};

export default firstPost;
