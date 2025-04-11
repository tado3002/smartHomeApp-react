import { Home, Mic, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto">
      <div className="bg-gradient-to-b from-[#535572] to-[#31374A] text-white rounded-t-3xl flex justify-between items-center px-12 py-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-transparent hover:text-white"
        >
          <Home className="w-6 h-6" />
        </Button>
        <Button
          size="icon"
          className="bg-gradient-to-br from-gray-300 to-white inset-shadow-lg inset-ring-2 p-4 rounded-full -mt-8 relative z-10 h-14 w-14"
        >
          <Mic className="w-6 h-6 text-pink-500" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-transparent hover:text-white"
        >
          <User className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};
