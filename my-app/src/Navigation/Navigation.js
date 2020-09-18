import React, { useState, useEffect } from "react";
import { NavigationBar } from "./NavigationBar";
import { NavigationMenu } from "./NavigationMenu";
import { NavigationMenuItem } from "./NavigationMenuItem";
import { NavigationDrawer } from "./NavigationDrawer";
import { NavigationDrawerMenu } from "./NavigationDrawerMenu";
import { NavigationDrawerMenuItem } from "./NavigationDrawerMenuItem";
import { MenuButton } from "./ToggleButton";
import { Logo } from "./Logo";
import { PrimaryButton } from "../Button/PrimaryButton";
import { NavigationBarSection } from "./NavigationBarSection";
import { NavigationDrawerSection } from "./NavigationDrawerSection";

const pages = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Page 2",
    href: "/page2",
  },
  {
    title: "Page 3",
    href: "/page3",
  },
  {
    title: "Page 4",
    href: "/page4",
  },
  {
    title: "Page 5",
    href: "/page5",
  },
  {
    title: "Page 6",
    href: "/page6",
  },
];

export const Navigation = ({ breakpoint = 1024, scrollOffset = 150 }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Handle switching between drawer and normal navigation
  useEffect(() => {
    const handleResize = (event) => {
      if (window.innerWidth <= breakpoint) {
        setShowDrawer(true);
      } else {
        setShowDrawer(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [showDrawer]);

  if (showDrawer) {
    return (
      <>
        <NavigationBar scrollOffset={scrollOffset}>
          <Logo />
          <MenuButton onClick={() => setIsDrawerOpen(true)}>open</MenuButton>
        </NavigationBar>
        <NavigationDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <NavigationDrawerSection>
            <NavigationDrawerMenu>
              {pages.map(({ title, href }) => (
                <NavigationDrawerMenuItem href={href} key={href}>
                  {title}
                </NavigationDrawerMenuItem>
              ))}
            </NavigationDrawerMenu>
          </NavigationDrawerSection>
          <NavigationDrawerSection>
            <PrimaryButton transparent onClick={() => alert("Click")}>Button (click)</PrimaryButton>
            <PrimaryButton href="/contact">Button (link)</PrimaryButton>
          </NavigationDrawerSection>
        </NavigationDrawer>
      </>
    );
  }
  return (
    <NavigationBar scrollOffset={scrollOffset}>
      <NavigationBarSection>
        <Logo />
      </NavigationBarSection>
      <NavigationBarSection>
        <NavigationMenu>
          {pages.map(({ title, href }) => (
            <NavigationMenuItem href={href} key={href}>
              {title}
            </NavigationMenuItem>
          ))}
        </NavigationMenu>
        <PrimaryButton transparent onClick={() => alert("Click")}>Button (click)</PrimaryButton>
        <PrimaryButton href="/contact">Button (link)</PrimaryButton>
      </NavigationBarSection>
    </NavigationBar>
  );
};
