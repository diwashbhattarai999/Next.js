import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const index = ({ productId = 100 }) => {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order...");
    router.push("/product");
  };
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href={`/products/${productId}`}>Product 1</Link>
      <Link href={`/products/${productId}`}>Product 2</Link>
      <Link href={`/products/${productId}`} replace>
        Product 3
      </Link>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
};

export default index;
