import { useRouter } from "next/router";
import React from "react";

const allBlog = () => {
  const router = useRouter();
  const { all } = router.query;
  return (
    <div>
      allBlog{" "}
      {all?.map((item, i) => {
        return <h2 key={i}>{item}</h2>;
      })}
    </div>
  );
};

export default allBlog;
