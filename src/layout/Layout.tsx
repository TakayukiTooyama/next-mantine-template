import type { FC } from "react";

export const Layout: FC = ({ children }) => (
  <div className="space-y-8 pt-4 pb-20 sm:space-y-14">
    <main className="mx-auto w-full max-w-screen-sm px-4">{children}</main>
  </div>
);
