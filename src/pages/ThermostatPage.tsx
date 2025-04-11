"use client";
import { useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  Droplets,
  Leaf,
  Settings,
  Thermometer,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ThermostatPage() {
  const [temperature, setTemperature] = useState(5);
  const [activeTab, setActiveTab] = useState("MODE");

  // Calculate the progress percentage for the circular progress
  const minTemp = 0;
  const maxTemp = 6;
  const progressPercentage = Math.ceil(
    ((temperature - minTemp) / (maxTemp - minTemp)) * 100,
  );

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4">
        <Button variant="ghost" size="icon" className="text-[#3c3c43]">
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-2xl font-bold text-black">LampSmart</h1>
        <Button
          variant="ghost"
          size="icon"
          className="bg-[#f9f9f9] rounded-full"
        >
          <Settings className="h-5 w-5 text-[#3c3c43]" />
        </Button>
      </div>

      {/* Temperature Display */}
      <div className="flex flex-col items-center justify-center flex-1 px-6">
        {/* Circular Thermostat Control */}
        <div className="relative w-64 h-64">
          {/* Progress arc */}
          <div className="absolute inset-2 overflow-hidden">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `conic-gradient(from 0deg, 
                  transparent ${100 - progressPercentage}%, 
                  #a855f7 ${100 - progressPercentage}%, 
                  #ec4899 100%)`,
              }}
            />
          </div>

          {/* Inner circle */}
          <div className="absolute inset-4 bg-white rounded-full shadow-lg flex flex-col gap-0 items-center justify-center">
            <div className="text-[#3c3c43] text-7xl font-light">
              {progressPercentage}%
            </div>
            <div className="text-[#3c3c43] opacity-60 text-sm">
              PROWER CONSUMPTION
            </div>
            <div className="text-purple-800 font-bold opacity-60 text-lg">
              {temperature}W/Hr
            </div>
          </div>
        </div>

        {/* Device Selector */}
        <div className="mt-8 w-full max-w-xs">
          <Button
            variant="outline"
            className="w-full bg-[#dadada] bg-opacity-30 border-none text-[#3c3c43] rounded-full flex justify-between items-center py-6"
          >
            <span>Device 1</span>
            <ChevronDown className="h-5 w-5 opacity-70" />
          </Button>
        </div>

        {/* Info Cards */}
        <div className="flex gap-4 mt-6 w-full max-w-xs">
          <Card className="flex-1 p-4 flex flex-col items-center justify-center bg-white rounded-3xl">
            <div className="bg-[#ffd0d0] bg-opacity-30 p-3 rounded-full mb-2">
              <Droplets className="h-5 w-5 text-pink-400" />
            </div>
            <div className="text-[#3c3c43] opacity-70 text-sm">
              Inside humidity
            </div>
            <div className="text-[#3c3c43] text-2xl font-medium">49%</div>
          </Card>
          <Card className="flex-1 p-4 flex flex-col items-center justify-center bg-white rounded-3xl">
            <div className="bg-[#f4f7fb] p-3 rounded-full mb-2">
              <Thermometer className="h-5 w-5 text-purple-400" />
            </div>
            <div className="text-[#3c3c43] opacity-70 text-sm">
              Outside Temp.
            </div>
            <div className="text-[#3c3c43] text-2xl font-medium">10°</div>
          </Card>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-around items-center p-4 pb-8">
        {["MODE", "ECO", "SCHEDULE", "HISTORY"].map((tab) => (
          <div
            key={tab}
            className="flex flex-col items-center"
            onClick={() => setActiveTab(tab)}
          >
            <div
              className={cn(
                "w-14 h-14 rounded-full flex items-center justify-center",
                activeTab === tab
                  ? "bg-gradient-to-br from-purple-500 to-pink-500"
                  : "bg-[#dadada] bg-opacity-30",
              )}
            >
              {tab === "MODE" && (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 16H16M8 8H16M12 20V4"
                    stroke={activeTab === "MODE" ? "white" : "#3c3c43"}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
              {tab === "ECO" && (
                <Leaf
                  className={`h-5 w-5 ${activeTab === "ECO" ? "text-white" : "text-[#3c3c43]"}`}
                />
              )}
              {tab === "SCHEDULE" && (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                    stroke={activeTab === "SCHEDULE" ? "white" : "#3c3c43"}
                    strokeWidth="2"
                  />
                  <path
                    d="M12 8V12L14 14"
                    stroke={activeTab === "SCHEDULE" ? "white" : "#3c3c43"}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
              {tab === "HISTORY" && (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                    stroke={activeTab === "HISTORY" ? "white" : "#3c3c43"}
                    strokeWidth="2"
                  />
                  <path
                    d="M12 8V12H16"
                    stroke={activeTab === "HISTORY" ? "white" : "#3c3c43"}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </div>
            <div className="text-[#3c3c43] text-xs mt-1">{tab}</div>
          </div>
        ))}
      </div>
    </>
  );
}
