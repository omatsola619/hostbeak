import Head from "next/head";
import Image from "next/image";
import Signup from "./signup";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hostbeak</title>
        <meta name="description" content="Host beak dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Signup />
    </div>
  );
}
