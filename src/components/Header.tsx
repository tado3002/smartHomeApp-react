import { Button } from "./ui/button";
import { Cog } from "lucide-react";

export const Header = () => {
  return (
    <div className="px-6 pt-2 pb-4 flex justify-between items-start">
      <h1 className="text-4xl font-bold">Home</h1>
      <Button
        variant="ghost"
        size="icon"
        className="bg-gradient-to-br from-[#DBE0E7] to-[#F8FBFF] rounded-lg h-11 w-11 drop-shadow-md"
      >
        <Cog className="w-5 h-5 text-[#3c3c43] opacity-60" />
      </Button>
    </div>
  );
};
