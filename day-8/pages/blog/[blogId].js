import Head from "next/head";

function Blog({ title, description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1 className="content">Article</h1>
    </div>
  );
}

export default Blog;

export async function getServerSideProps() {
  return {
    props: {
      title: "Article Title",
      description: "Article description",
    },
  };
}
