import { useRouter } from "next/router";
import React from "react";

const reviewId = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;

  return (
    <div>
      Review {reviewId} for product {productId}
    </div>
  );
};

export default reviewId;
