import User from "../components/user";
import Link from "next/link";

const users = ({ users }) => {
  return (
    <>
      <Link href="/ ">Home</Link>
      <h1>List of Users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}
    </>
  );
};

export default users;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  };
}

//getStaticProps runs only on the server side
//The function will never run client-side
//The code you write inside getStaticProps won't even be included in the JS bundle that is sent to the browser

//You can write server-side code directly in getStaticProps
//Acessing the file system using the fs module or quering a database can be done inside getStaticProps
//You also don't have to worry about including API keys in getStaticProps as that won't make it to the browser.

//getStaticProps is allowed only in a page and cannot be run from a regular component file.
//It is used only for pre-rendering and not client-side dat fetching

//getStaticProps should return an object and object should contain a props key which is an object

//getStaticProps will run at build time
//During development, getStaticProps runs on every request