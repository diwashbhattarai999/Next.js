import { comments } from "../../data/comments";

function Comment({ comment }) {
  return (
    <>
      <h2>List of Individual comments</h2>
      <h3>
        {comment.id} {comment.text}{" "}
      </h3>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { commentId } = params;

  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  console.log(comment);

  //Don't call api routes in here. It is not recommended as it takes long time and also the data is already available
  //   Dont't do this : ->
  //   const res = await fetch(`http://localhost:3000/api/comments/${commentId}`);
  //   const data = await res.json();

  return {
    props: {
      comment,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: "1" } },
      { params: { commentId: "2" } },
      { params: { commentId: "3" } },
    ],
    fallback: false,
  };
}

export default Comment;
