import Link from "next/link";
import { motion } from "framer-motion";
import { MenuButton } from "./MenuButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { pageDetails } from "./pageDetails";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: -500, width: 0 },
};
export const Sidebar = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  const [sidebarOpen, setSidebarOpen] = useState(currentPath !== "/");
  console.log("currentPath", currentPath);
  useEffect(() => {
    setSidebarOpen(currentPath !== "/");
  }, [currentPath]);
  return (
    <>
      <motion.div
        className="fixed top-4 left-4 z-10"
        animate={sidebarOpen ? "open" : "closed"}
        variants={{ closed: { opacity: 1 } }}
      >
        <MenuButton sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </motion.div>
      <motion.nav
        animate={sidebarOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <div className="h-[calc(100vh_-_75px)] fixed w-[200px] sm:sticky top-[75px] p-8 border-r-[1px] border-gray-500 bg-charcoal flex flex-col items-start z-20">
          {Object.keys(pageDetails).map((page, index) => {
            // Return a disclosure button for each page, and then a panel containing each of the subpageDetails
            return (
              <div key={`${page}-${index}`}>
                <Disclosure
                  defaultOpen={currentPath === pageDetails[page].path}
                >
                  <Disclosure.Button
                    className={`${
                      currentPath === pageDetails[page].path
                        ? "text-blue-400"
                        : ""
                    } py-2 hover hover:text-purple-400`}
                    key={pageDetails[page].title}
                    onClick={() => {
                      // Have to use router push to prevent conflict with disclosure open/show panel
                      router.push(pageDetails[page].path);
                    }}
                  >
                    {pageDetails[page].title}
                  </Disclosure.Button>
                  {currentPath.includes(pageDetails[page].path) && (
                    <Disclosure.Panel
                      static
                      className="text-gray-500 flex flex-col pl-4 border-l-2 ml-2"
                    >
                      {pageDetails[page]?.subpages?.map((subpage) => {
                        return (
                          <Link href={subpage.path} key={subpage.path}>
                            <span
                              className={`${
                                currentPath === subpage.path
                                  ? "text-blue-500"
                                  : ""
                              } my-1 hover:cursor-pointer hover:text-purple-400 leading-none`}
                            >
                              {subpage.title}
                            </span>
                          </Link>
                        );
                      }) ?? null}
                    </Disclosure.Panel>
                  )}
                </Disclosure>
              </div>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
};
