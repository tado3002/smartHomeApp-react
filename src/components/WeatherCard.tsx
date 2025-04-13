import { WeatherData } from "@/api/types";
import { Card, CardContent } from "@/components/ui/card";
import { useGeolocation } from "@/hooks/useGeolocation";
import { useWeatherQuery } from "@/hooks/useWeather";
import { Cloud } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

export const WeatherCard = () => {
  const geolocation = useGeolocation();
  const { data, isLoading } = useWeatherQuery(geolocation.coordinate);
  if (isLoading || !data) return <SkeletonWeatherCard />;

  const {
    weather: [currentWeather],
    main: { temp },
    name: city,
  } = data as WeatherData;

  return (
    <Card className="mx-6 mb-6 rounded-3xl overflow-hidden border-0 shadow-sm">
      <CardContent className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
        <div className="flex justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-1">My Location</h3>
            <p className="text-xl opacity-90">{city}</p>
          </div>
          <div className="text-4xl font-light">{temp}°C</div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <Cloud className="w-6 h-6" />
            <span className="text-lg">{currentWeather.description}</span>
          </div>
          <div className="text-lg">H:2° L:12°</div>
        </div>
      </CardContent>
    </Card>
  );
};

const SkeletonWeatherCard = () => {
  return (
    <Card className="mx-6 mb-6 rounded-3xl overflow-hidden border-0 shadow-sm">
      <CardContent className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
        <div className="flex justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-1">My Location</h3>
            <Skeleton className="h-6 w-26" />
          </div>
          <Skeleton className="h-14 w-26" />
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <Skeleton className="w-6 h-6" />
            <Skeleton className="w-26 h-6" />
          </div>
          <Skeleton className="h-6 w-26" />
        </div>
      </CardContent>
    </Card>
  );
};
