"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {theme ? (
        <Button variant="outline" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <Sun className="h-4 w-4" />
        </Button>
      ) : (
        <Button variant="ghost" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <Moon className="h-4 w-4" />
        </Button>
      )}
    </>
  );
};

export default ToggleTheme;
