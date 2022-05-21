import { ReactNode } from "react";
import Layout from "../../components/Layout";
import Slider from "react-slick";
import Head from "next/head";
import { Text } from "../../components/Text";

function Safety() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Text>
      <h1>Setting Up Your First Wallet</h1>
      <p>
        Your wallet is your ticket to doing pretty much everything in Web3.
        Managing your wallets can get fairly complicated, but we’ll give you an
        idea of all of the different ways you can handle it.
      </p>
    </Text>
  );
}

// Safety.getLayout = function getLayout(page: ReactNode) {
//   return <Layout>{page}</Layout>;
// };

export default Safety;
