import { Children, ReactNode } from "react";

export const Text = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-[700px] mx-auto">{children}</div>;
};
