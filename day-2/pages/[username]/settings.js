import { useRouter } from "next/router";
import React from "react";

const settings = () => {
  const router = useRouter();
  const username = router.query.username;
  return <div>settings for {username}</div>;
};

export default settings;
