"use client";

import { FC, useEffect, useState } from "react";
import { Switch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { Card, Skeleton } from "@nextui-org/react";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

interface ThemeSwitchProps {
  size?: "lg" | "md" | "sm";
}
export const ThemeSwitch: FC<ThemeSwitchProps> = ({ size = "lg" }) => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const isSelected = currentTheme === "dark";

  const handleChange = () => {
    setTheme(isSelected ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <>
        <Skeleton className="flex rounded-full w-10" />
      </>
    );
  }

  return (
    <>
      <Switch
        defaultSelected={isSelected}
        size={size}
        color="default"
        onChange={handleChange}
        startContent={<SunFilledIcon size={20} />}
        endContent={<MoonFilledIcon size={20} />}
      />
    </>
  );
};
