import { WEATHER_API_CONFIG } from "./config";
import { Coordinate, WeatherData } from "./types";

class Weather {
  private createUrl(
    endpoint: string,
    params: Record<string, string | number>,
  ): string {
    const searchParams = new URLSearchParams({
      appid: WEATHER_API_CONFIG.DEFAULT_PARAMS.appid,
      ...params,
    });
    return `${endpoint}?${searchParams.toString()}`;
  }

  private async fetchData<T>(endpoint: string): Promise<T> {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Weather API error: ${response.statusText}`);
    }
    return response.json();
  }
  private async getCurrentWeather({
    lat,
    lon,
  }: Coordinate): Promise<WeatherData> {
    const url = this.createUrl(`${WEATHER_API_CONFIG.BASE_URL}/weather`, {
      lat: lat.toString(),
      lon: lon.toString(),
      units: WEATHER_API_CONFIG.DEFAULT_PARAMS.unit,
    });

    return this.fetchData<WeatherData>(url);
  }
}

export const weatherApi = new Weather();
