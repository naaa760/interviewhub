"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import { CodeIcon } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const toggleDarkMode = () => {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle("dark");
  };

  useEffect(() => {
    // Example: Check and set the initial theme based on user preference
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      )}
    >
      <div className="flex h-16 items-center px-4 container mx-auto">
        {/* LEFT SIDE -LOGO */}
        <a
          href="/"
          className="group flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-90 transition-all duration-300"
        >
          <CodeIcon className="size-8 text-pink-600 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
          <span className="bg-gradient-to-r from-pink-600 via-pink-600 to-pink-600 bg-clip-text text-transparent bg-300% animate-gradient">
            iNterVHub
          </span>
        </a>

        {/* RIGHT SIDE - ACTIONS */}
        <SignedIn>
          <div className="flex items-center space-x-4 ml-auto">
            <Button
              variant="ghost"
              className="relative hover:bg-transparent group"
              onClick={toggleDarkMode}
            >
              <span className="relative z-10">Toggle Dark Mode</span>
            </Button>
            <div className="transition-transform duration-200 hover:scale-105">
              <ModeToggle />
            </div>
            <div className="transition-transform duration-200 hover:scale-105">
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox:
                      "hover:scale-110 transition-transform duration-200",
                  },
                }}
              />
            </div>
          </div>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
