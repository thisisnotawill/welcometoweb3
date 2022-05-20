import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
const variants = {
  hidden: { opacity: 0, x: 0, y: 1000, zIndex: -1 },
  enter: { opacity: 1, x: 0, y: 0, zIndex: -1 },
  exit: { opacity: 0, x: 0, y: -100, zIndex: -1 },
};
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter={true}>
        <motion.div
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.5 }}
          key={router.pathname}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
export default MyApp;
