import Link from "next/link";
import { motion } from "framer-motion";
import { HamburgerIcon } from "./HamburgerIcon";
import { useState } from "react";
import { useRouter } from "next/router";
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: -500, width: 0 },
};
export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();
  return (
    <>
      <motion.div
        className="fixed top-4 left-4 z-10"
        animate={sidebarOpen ? "open" : "closed"}
        variants={{ closed: { opacity: 1 } }}
      >
        <HamburgerIcon
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </motion.div>
      <motion.nav
        animate={sidebarOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <div className="h-screen fixed sm:sticky top-[75px] p-8 border-r-[1px] border-gray-500 bg-charcoal">
          <ul className="">
            <li className="">
              <Link href="/">Home</Link>
            </li>
            <li className="">
              <Link href="/wallets">Wallets</Link>
            </li>
            <li>
              <Link href="/safety">Safety</Link>
            </li>
            <li>
              <Link href="/resources">Resources</Link>
            </li>
          </ul>
        </div>
      </motion.nav>
    </>
  );
};
