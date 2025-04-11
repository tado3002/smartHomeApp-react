import { Header } from "@/components/Header";
import { TabsSection } from "@/components/TabsSection";
import { WeatherCard } from "@/components/WeatherCard";

export const HomePage = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Weather Card */}
      <WeatherCard />

      {/* Tabs */}
      <TabsSection />
    </>
  );
};
