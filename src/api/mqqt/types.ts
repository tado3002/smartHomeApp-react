export type Lamp = {
  topic: LampTopic;
  state: "ON" | "OFF";
};

export type LampTopic = "gpio2" | "gpio16";

export interface SmartLampData {
  data: Lamp[];
}
