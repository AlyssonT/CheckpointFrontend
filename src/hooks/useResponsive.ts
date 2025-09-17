import { useState, useEffect } from "react";

export function useResponsive() {
  const [breakpoint, setBreakpoint] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;

      const mobileMax = 768;
      const tabletMax = 1024;

      setBreakpoint({
        isMobile: width < mobileMax,
        isTablet: width >= mobileMax && width < tabletMax,
        isDesktop: width >= tabletMax,
      });
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);

    return () => {
      window.removeEventListener("resize", updateBreakpoint);
    };
  }, []);

  return breakpoint;
}
