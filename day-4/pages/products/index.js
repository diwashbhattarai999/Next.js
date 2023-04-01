import Link from "next/link";

const ProductList = ({ products }) => {
  return (
    <>
      <h1>List of products</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link href={`/products/${product.id}`} passHref>
              <p>
                {product.id} {product.title} {product.price}
              </p>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default ProductList;

export async function getStaticProps() {
  console.log("Generating / Regeneratin ProductList");
  const res = await fetch("http://localhost:4000/products");
  const data = await res.json();

  return {
    props: {
      products: data,
    },
    revalidate: 30,
  };
}
