import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Client side rendering</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Next JS Client side rendering</h1>
        <Link href="/dashboard">
          <h2>Dashboard</h2>
        </Link>
      </main>
    </>
  );
}
