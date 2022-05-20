import { HamburgerIcon } from "./HamburgerIcon";
export const Header = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: Boolean;
  setSidebarOpen: any;
}) => {
  return (
    <div className="h-[75px] w-full fixed border-b-[1px] border-gray-600 bg-charcoal">
      <span className="font-extrabold text-2xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        🎉 Welcome to Web3 🎉
      </span>
      <button className="absolute right-4 top-4 border-[1px] border-white rounded-lg p-2">
        Connect Wallet
      </button>
    </div>
  );
};
