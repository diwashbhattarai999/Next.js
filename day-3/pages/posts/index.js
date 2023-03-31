import Link from "next/link";

const PostList = ({ posts }) => {
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`} passHref>
              <p>
                {post.id} {post.title}
              </p>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default PostList;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
        posts: data,
      // posts: data.slice(0, 3),
    },
  };
}
