import { MenuButton } from "./MenuButton";
export const Header = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: Boolean;
  setSidebarOpen: any;
}) => {
  return (
    <div className="h-[75px] w-full fixed border-b-[1px] border-gray-600 bg-charcoal">
      <span className="hidden sm:block font-extrabold text-2xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        🎉 Welcome to Web3 🎉
      </span>
      <span className="sm:hidden font-extrabold text-lg absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        🎉 W2W3 🎉
      </span>
      <button className="hidden sm:block absolute right-4 top-4 border-[1px] border-white rounded-lg p-2">
        Connect Wallet
      </button>
    </div>
  );
};
