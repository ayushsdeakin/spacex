import React, { createContext, useState, useEffect, useContext } from "react";

const ScrollContext = createContext({ scrollY: 0 });

export const ScrollObserver = ({ children }: { children: React.ReactNode }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <ScrollContext.Provider value={{ scrollY }}>{children}</ScrollContext.Provider>;
};

export const useScroll = () => useContext(ScrollContext);
