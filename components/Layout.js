import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { signIn } from "next-auth/react";

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Welcome to the Driver Airport" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <button onClick={() => signIn()}>Log in</button>
      <Header />
      {children}
      <Footer />
    </>
  );
}
