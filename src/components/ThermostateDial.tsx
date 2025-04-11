"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThermostatDialProps {
  minTemp?: number;
  maxTemp?: number;
  initialTemp?: number;
  onTemperatureChange?: (temp: number) => void;
}

export function ThermostatDial({
  minTemp = 10,
  maxTemp = 30,
  initialTemp = 22,
  onTemperatureChange,
}: ThermostatDialProps) {
  const [temperature, setTemperature] = useState(initialTemp);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startTemp, setStartTemp] = useState(initialTemp);

  // Calculate the progress percentage for the circular progress
  const progressPercentage =
    ((temperature - minTemp) / (maxTemp - minTemp)) * 100;

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    if ("touches" in e) {
      setStartY(e.touches[0].clientY);
    } else {
      setStartY(e.clientY);
    }
    setStartTemp(temperature);
  };

  const handleMouseMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;

    let clientY: number;
    if ("touches" in e) {
      clientY = e.touches[0].clientY;
    } else {
      clientY = e.clientY;
    }

    const deltaY = startY - clientY;
    const tempChange = Math.round(deltaY / 10);
    const newTemp = Math.min(
      maxTemp,
      Math.max(minTemp, startTemp + tempChange),
    );

    setTemperature(newTemp);
    if (onTemperatureChange) {
      onTemperatureChange(newTemp);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      className="relative w-64 h-64 select-none"
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* Tick marks */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute w-1 h-4 bg-[#bac4cf] opacity-30",
              i % 5 === 0 && "h-6 opacity-50",
            )}
            style={{
              left: "50%",
              top: "50%",
              transformOrigin: "bottom center",
              transform: `rotate(${i * 12}deg) translateY(-120px)`,
            }}
          />
        ))}
      </div>

      {/* Temperature range labels */}
      <div className="absolute -left-6 top-1/2 -translate-y-1/2 text-[#bac4cf]">
        {minTemp}°
      </div>
      <div className="absolute -right-6 top-1/2 -translate-y-1/2 text-[#bac4cf]">
        {maxTemp}°
      </div>

      {/* Progress arc */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(from 225deg, 
              transparent ${100 - progressPercentage}%, 
              #a855f7 ${100 - progressPercentage}%, 
              #ec4899 100%)`,
          }}
        />
      </div>

      {/* Inner circle */}
      <div className="absolute inset-4 bg-white rounded-full shadow-lg flex flex-col items-center justify-center">
        <div className="text-[#3c3c43] opacity-60 text-lg">HEATING</div>
        <div className="text-[#3c3c43] text-7xl font-light">{temperature}</div>
        <Leaf className="text-[#30db5b] mt-2 h-5 w-5" />
      </div>
    </div>
  );
}
