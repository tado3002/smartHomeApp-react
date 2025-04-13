import { Coordinate } from "@/api/types";
import { weatherApi } from "@/api/weather";
import { useQuery } from "@tanstack/react-query";

export const WEATHER_KEY = {
  weather: (coords: Coordinate) => ["weather", coords] as const,
} as const;

export function useWeatherQuery(coords: Coordinate | null) {
  return useQuery({
    queryKey: WEATHER_KEY.weather(coords ?? { lat: 0, lon: 0 }),
    queryFn: () => (coords ? weatherApi.getCurrentWeather(coords) : null),
    enabled: !!coords,
  });
}
