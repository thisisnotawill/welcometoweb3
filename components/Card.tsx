import { ReactNode } from "react";

export const Card = ({
  icon,
  title,
  body,
}: {
  icon: ReactNode;
  title: string | ReactNode;
  body: string | ReactNode;
}) => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg text-center">
      <div className="mx-auto w-[25px] mb-2 text-xl text-center">{icon}</div>
      <span className="font-bold ">{title}</span>
      <p className="break-words">{body}</p>
    </div>
  );
};
