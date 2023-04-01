import { useRouter } from "next/router";

function Product({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h2>
        {product.id} {product.title}
      </h2>
      <p>{product.body}</p>
      <p>{product.price}</p>

      <hr />
    </>
  );
}

export default Product;

export async function getStaticProps(context) {
  const { params } = context;
  console.log(`Regenerating product ${params.productId}`)
  console.log(params);
  const res = await fetch(`http://localhost:4000/products/${params.productId}`);
  const data = await res.json();

  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
}
