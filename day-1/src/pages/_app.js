import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <nav className="navbar">
        <div className="logo">Next.js</div>
        <div className="links">
          <a href="/">Home</a>
          <a href="/events">Event</a>
          <a href="/aboutUs">About Us</a>
        </div>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
