import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { useState } from "react";
import { Switch } from "./ui/switch";

const rooms = [
  {
    name: "living room",
    isOn: true,
  },
];

export const DeviceCards = () => {
  const [dataRooms, setDataRooms] = useState(rooms);

  const switchHandler = (id: number) => {
    setDataRooms((prev) =>
      prev.map((room, index) => {
        if (index === id)
          return {
            ...room,
            isOn: !room.isOn,
          };
        return room;
      }),
    );
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      {dataRooms.map((room, id) => {
        return (
          <Card
            className="rounded-3xl gap-0 overflow-hidden border-0 shadow-lg flex flex-row"
            key={id}
          >
            <div className="relative">
              <img
                src="/images/room1.jpg"
                alt="Master Bedroom"
                className="w-full h-36 object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm h-8 w-8 rounded-full p-0"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="2" fill="white" />
                  <circle cx="12" cy="5" r="2" fill="white" />
                  <circle cx="12" cy="19" r="2" fill="white" />
                </svg>
              </Button>
            </div>
            <CardContent className="p-4 flex flex-col justify-between">
              <h3 className="text-lg text-[#3c3c43] font-medium">Smart Lamp</h3>
              <p className="text-sm text-[#3c3c43] opacity-60 mb-4 leading-none">
                at Master Bedroom
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-medium">
                  {room.isOn ? "ON" : "OFF"}
                </span>
                <Switch
                  checked={room.isOn}
                  onClick={() => switchHandler(id)}
                  className="data-[state=checked]:bg-gradient-to-r from-purple-500 to-pink-500"
                />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
