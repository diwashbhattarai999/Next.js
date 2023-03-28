import { useRouter } from "next/router";
import React from "react";

const allBlog = () => {
  const router = useRouter();
  const blogdetails = router.query.all;
  return (
    <div>
      allBlog{" "}
      {blogdetails?.map((item, i) => {
        return <h2 key={i}>{item}</h2>;
      })}
    </div>
  );
};

export default allBlog;
