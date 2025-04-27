import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { Skeleton } from "./ui/skeleton";
import {
  useSmartLampQuery,
  useSwitchSmartLampQuery,
} from "@/hooks/useSmartLamp";
import { LampTopic } from "@/api/mqqt/types";

export const DeviceCards = () => {
  const { data, isLoading } = useSmartLampQuery();
  const { mutate } = useSwitchSmartLampQuery();

  const switchHandler = (topic: LampTopic) => {
    mutate(topic);
  };

  if (isLoading) return <SkeletonDeviceCards />;

  return (
    <div className="grid grid-cols-1 gap-4">
      {data!.data.map((lamp) => (
        <Card className="rounded-3xl gap-0 overflow-hidden border-0 shadow-lg flex flex-row">
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
                {lamp.state == "ON" ? "ON" : "OFF"}
              </span>
              <Switch
                checked={lamp.state === "ON" ? true : false}
                onClick={() => switchHandler(lamp.topic)}
                className="data-[state=checked]:bg-gradient-to-r from-purple-500 to-pink-500"
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const SkeletonDeviceCards = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <Card className="rounded-3xl gap-0 overflow-hidden border-0 shadow-lg flex flex-row">
        <div className="relative">
          <Skeleton className="h-36 w-48" />
        </div>
        <CardContent className="p-4 flex flex-col justify-between">
          <Skeleton className="h-6 w-12" />
          <Skeleton className="h-6 w-12" />
          <div className="flex justify-between items-center">
            <Skeleton className="h-6 w-6" />
            <Skeleton className="h-6 w-6" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
