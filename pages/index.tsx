import { ReactNode } from "react";
import Layout from "../components/Layout";
import Slider from "react-slick";
import Head from "next/head";

function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="h-[2000px]">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <title>Home</title>
        <meta
          name="description"
          content="Get started with Web3 simply and safely."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Wallets 101</h1>
      <p>
        Your wallet is your ticket to doing pretty much everything in Web3.
        Managing your wallets can get fairly complicated, but we’ll give you an
        idea of all of the different ways you can handle it.
      </p>
      <ul className="list-disc list-inside">
        <li>Public Address - a way for people to send stuff to you!</li>
        <li>Private Key - allows you to sign and send transactions</li>
        <li>Metamask - Your private key is derived from your seed phrase.</li>
      </ul>
      <p>
        Wallets can be custodial or non-custodial. A custodial wallet means a
        third party has ownership of the private keys, and are usually offered
        by exchanges such as Coinbase or Gemini. A non-custodial wallet means
        you have full control and ownership of your funds.
      </p>
      <p>Your “wallet” has a few parts to it: </p>
    </div>
  );
}

// Home.getLayout = function getLayout(page: ReactNode) {
//   return <Layout>{page}</Layout>;
// };

export default Home;
