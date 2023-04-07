import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main
        className={`${poppins.className} flex min-h-screen flex-col items-center justify-between p-24`}
      >
        <h1 className=" text-3xl font-bold underline">Hello world!</h1>
      </main>
    </>
  );
}
