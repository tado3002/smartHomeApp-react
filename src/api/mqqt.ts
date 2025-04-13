import { MQQT_SERVER_API_CONFIG } from "./config";
import { SmartLampData } from "./mqqt/types";

class Mqqt {
  private async fetchData<T>(endpoint: string): Promise<T> {
    const headers = {
      "x-api-key": import.meta.env.VITE_MQQT_SERVER_API_KEY,
    };

    const response = await fetch(
      `${MQQT_SERVER_API_CONFIG.BASE_URL + endpoint}`,
      {
        method: "GET",
        headers,
      },
    );
    if (!response.ok) {
      throw new Error(`Mqqt smart lamp API error: ${response.statusText}`);
    }
    return response.json();
  }
  async getCurrentState(): Promise<SmartLampData> {
    return this.fetchData<SmartLampData>("/lamp");
  }
  async switchState(): Promise<SmartLampData> {
    return this.fetchData<SmartLampData>("/lamp/switch");
  }
}

export const mqqtApi = new Mqqt();
