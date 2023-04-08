import { getSession, signOut, useSession } from "next-auth/react";
import { Poppins } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
// import { useState } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Home() {
  // const [session, setSession] = useState(false);
  const { data: session } = useSession();

  function handleSignOut() {
    signOut();
  }

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      {session ? User({ session, handleSignOut }) : Guest()}
    </>
  );
}

//Guest
function Guest() {
  return (
    <main
      className={`${poppins.className} flex flex-col items-center justify-center h-screen container mx-auto text-center`}
    >
      <h3 className="text-4xl font-bold">Guest Homepage</h3>

      <div className="flex justify-center">
        <Link
          href={"/login"}
          className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50"
        >
          Sign In
        </Link>
      </div>
    </main>
  );
}

//Authorized User
function User({ session, handleSignOut }) {
  return (
    <main
      className={`${poppins.className} flex flex-col items-center justify-center h-screen container mx-auto text-center`}
    >
      <h3 className="text-4xl font-bold">Authorized User Homepage</h3>

      <div className="details">
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleSignOut}
          className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 bg-gray-50"
        >
          Sign Out
        </button>
      </div>

      <div className="flex justify-center">
        <Link
          href={"/profile"}
          className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50"
        >
          Profile Page
        </Link>
      </div>
    </main>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
