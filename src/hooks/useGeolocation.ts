import { useEffect, useState } from "react";
import { Coordinate } from "../api/types";

interface GeolocationState {
  coordinate: Coordinate | null;
  error: string | null;
  isLoading: boolean;
}

export function useGeolocation() {
  const [location, setLocation] = useState<GeolocationState>({
    coordinate: null,
    error: null,
    isLoading: true,
  });

  const getGeolocation = () => {
    setLocation((prev) => ({ ...prev, isLoading: true, error: null }));
    if (!navigator.geolocation) {
      setLocation({
        coordinate: null,
        error: "Geolocation is not supported by your browser!",
        isLoading: false,
      });
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          coordinate: {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          },
          error: null,
          isLoading: false,
        });
      },
      (error) => {
        let errorMessage: string;

        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage =
              "Location permission denied. Please enable location access.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request timed out.";
            break;
          default:
            errorMessage = "An unknown error occurred.";
        }

        setLocation({
          coordinate: null,
          error: errorMessage,
          isLoading: true,
        });
      },
      {
        timeout: 5000,
        enableHighAccuracy: true,
        maximumAge: 0,
      },
    );
  };

  useEffect(() => {
    getGeolocation();
  }, []);

  return {
    ...location,
    getGeolocation,
  };
}
