import { PropsWithChildren } from "react";
import { BottomNav } from "./BottomNav";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="font-sans bg-[#eff1f5] min-h-screen pb-16 max-w-md mx-auto relative">
      {children}
      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};
