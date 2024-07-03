"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser, IconCurrentLocation, Icon24Hours } from "@tabler/icons-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/About",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Services",
      link: "/Services",
      icon: (
        <Icon24Hours className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Track Cargo",
      link: "/Track",
      icon: (
        <IconCurrentLocation className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "/Contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      
    </div>
  );
}

