// import { useRouter } from "next/router";

function Post({ post }) {
  // const router = useRouter();

  // if (router.isFallback) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
}

export default Post;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    // paths,
    // fallback: false,
    // fallback: true,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  console.log(`Generating Page for /posts/${params.postId}`);

  return {
    props: {
      post: data,
    },
  };
}

//todo The paths returned from getStaticPaths will be rendered to HTML at build time by getStaticProps

//* getStaticPaths fallback: false
//If fallback is set to false, then any paths not returned by getStaticPaths will result in a 404 page

//? When to use false:
//The false value is most suitable if you have an application with a small number of paths to pre-render.
//When new pages are not added often.
//A blog site with a few articles is good example for fallback set to false

//* getStaticPaths fallback: true
//The paths that have not been generated at build time will not result in 404 page. Instead, Next.js will serve a "fallback" version of the page on the first request to such a path.

//In the background, Next.js will statically generate the requested path HTML and JSON. This includes running getStaticProps.

//When that's done, the browser receives the JSON for the generated path. This will be used to automatically render the page with required props. From the user's perspective, the page will be swapped from the fallback page to the full page.

//At the same time, Next.js keeps track of the new list of pre-rendered pages, Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time.

//? When to use true
//The true value is most suitable if your app has a very large number of static pages that depend on data.
//A large e-commerce site
//You want all the product pages to be pre-rendered but if you have a few thousand products, builds can take really long time.
//You may statically generate a small subset of products that are popular and use fallback: true for the rest.
//When someone requests a page that's not generated yet, the user will see the page with a loading indicator.
//Shortly after, getStaticProps finishes and the page will be rendered with the requested data. From then onwards, everyone who requests the same page will get the statically pre-rendered page.

//* getStaticPaths fallback: "blocking"
//The paths that have not been generated at build time will not result in 404 page. Instead, on the first request, Next.js will render the page on the server and the generated HTML.

//When that's done, the browser receives the HTML for the generated path. From the user's perspective, it will transition from "the browser is requesting the page" to "the full page is loaded". There is no flash of loading/fallback state.

//At the same time, Next.js keeps track of the new list of pre-rendered pages. Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time.


//? When to use fallback
//On a UX level, sometimes, people prefer the page to be loaded without loading indicator if the wait time is a few milli seconds. This helps avoid the layout shift.

//Some crawlers did not support JavaScript. The loading page would be rendered and then the full page would be loaded which was causing a problem