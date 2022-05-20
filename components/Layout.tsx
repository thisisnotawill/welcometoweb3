import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex">
        <Sidebar />
        <div className="mt-[75px] flex-1 py-12 px-16">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
