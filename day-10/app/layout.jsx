import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Home | Learn Next.JS with Diwash",
  description: "Learn web development with Diwash",
  keywords:
    "web development, web design, javascript, react, node, angular, vue, html, css, bootstrap, sass, webpack, babel, gulp, npm, yarn, git, github, code, programming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
