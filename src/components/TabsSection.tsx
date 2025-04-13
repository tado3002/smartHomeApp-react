import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { RoomCards } from "./RoomCards";
import { DeviceCards } from "./DeviceCards";
export const TabsSection = () => {
  return (
    <Tabs defaultValue="devices" className="mx-6 mb-6">
      <TabsList className="w-full h-12 rounded-lg bg-gray-200 border border-[#dee2e7] p-1">
        <TabsTrigger
          value="room"
          className="flex-1 h-full rounded-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=inactive]:text-[#3c3c43] data-[state=inactive]:opacity-60"
        >
          Room
        </TabsTrigger>
        <TabsTrigger
          value="devices"
          className="flex-1 h-full rounded-lg data-[state=active]:bg-white data-[state=active]:text-black data-[state=inactive]:text-[#3c3c43] data-[state=inactive]:opacity-60"
        >
          Devices
        </TabsTrigger>
      </TabsList>
      <TabsContent value="room" className="mt-4">
        {/* Room Grid */}
        <RoomCards />
      </TabsContent>
      <TabsContent value="devices" className="mt-4">
        <DeviceCards />
      </TabsContent>
    </Tabs>
  );
};
