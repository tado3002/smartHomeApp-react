export const WEATHER_API_CONFIG = {
  BASE_URL: "https://api.openweathermap.org/data/2.5",
  GEO: "https://openweathermap.org/geo/1.0",
  API_KEY: import.meta.env.VITE_OPENWEATHER_API_KEY,
  DEFAULT_PARAMS: {
    unit: "metric",
    appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
  },
};

export const MQQT_SERVER_API_CONFIG = {
  BASE_URL: import.meta.env.VITE_MQTT_BASE_URL,
  API_KEY: import.meta.env.VITE_MQQT_SERVER_API_KEY,
};
