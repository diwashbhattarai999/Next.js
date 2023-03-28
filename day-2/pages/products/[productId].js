import { useRouter } from "next/router";
import React from "react";

const productDetail = () => {
  const router = useRouter();
  const productId = router.query.productId;

  return <div>Details about product {productId} </div>;
};

export default productDetail;
