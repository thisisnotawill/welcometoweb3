import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { useKey } from "rooks";
import { Header } from "./Header";
import { getPageDetailsArray } from "./pageDetails";
import { Sidebar } from "./Sidebar";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";

const pageDetailsArray = getPageDetailsArray();

function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [direction, setDirection] = useState("left");
  const router = useRouter();
  const path = router.pathname;
  const pageDetails = pageDetailsArray.find((page) => page.path === path);
  const pageIndex = pageDetailsArray.findIndex((page) => page.path === path);
  const previousPage = pageDetailsArray[pageIndex - 1]?.path;
  const nextPage = pageDetailsArray[pageIndex + 1]?.path;

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : 1000,
      y: 0,
      zIndex: -1,
    },
    enter: { opacity: 1, x: 0, y: 0, zIndex: -1 },
    exit: {
      opacity: 0,
      x: direction === "left" ? 1000 : -100,
      y: 0,
      zIndex: -1,
    },
  };

  const handleRight = () => {
    setDirection("right");
    nextPage ? router.push(nextPage) : null;
  };
  const handleLeft = () => {
    setDirection("left");
    previousPage ? router.push(previousPage) : null;
  };
  useKey(["ArrowRight"], handleRight);
  useKey(["ArrowLeft"], handleLeft);

  return (
    <div className="h-full">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex">
        <Sidebar />
        {/* Height of the main display must at least be the full screen height otherwise the sticky sidebar will not position correctly */}
        <div className="relative w-full">
          {previousPage ? (
            <button
              className="absolute top-1/2 left-4 z-10 text-2xl"
              onClick={() => setDirection("left")}
            >
              <Link href={pageDetailsArray[pageIndex - 1].path}>
                <BsFillCaretLeftFill className="hover:text-purple-400" />
              </Link>
            </button>
          ) : null}
          {nextPage ? (
            <button
              className="absolute top-1/2 right-8 z-10 text-2xl"
              onClick={() => setDirection("right")}
            >
              <Link href={pageDetailsArray[pageIndex + 1].path}>
                <BsFillCaretRightFill className="hover:text-purple-400" />
              </Link>
            </button>
          ) : null}
          <div className="mt-[75px] p-4 w-full sm:p-12 h-[calc(100vh_-_75px)] overflow-y-scroll relative">
            <Head>
              <title>{pageDetails?.title}</title>
              <meta name="description" content={pageDetails?.description} />
              <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
              />
            </Head>
            <AnimatePresence exitBeforeEnter={true}>
              <motion.div
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.5 }}
                key={router.pathname}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
