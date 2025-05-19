import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollRestoration() {
  const location = useLocation();
  const key = `scroll-position-${location.pathname}`;

  // Save scroll position before refresh or navigation
  useEffect(() => {
    const saveScroll = () => {
      sessionStorage.setItem(key, window.scrollY.toString());
    };

    window.addEventListener("beforeunload", saveScroll);
    window.addEventListener("pagehide", saveScroll); // for mobile

    return () => {
      window.removeEventListener("beforeunload", saveScroll);
      window.removeEventListener("pagehide", saveScroll);
    };
  }, [key]);

  // Restore scroll after render + optional loading check
  useEffect(() => {
    const scrollY = sessionStorage.getItem(key);

    if (scrollY !== null) {
      // Wait for DOM to fully load
      const onLoad = () => {
        setTimeout(() => {
          window.scrollTo({
            top: parseInt(scrollY),
            behavior: "auto", // or "smooth"
          });
        }, 300);
      };

      if (document.readyState === "complete") {
        onLoad();
      } else {
        window.addEventListener("load", onLoad);
        return () => window.removeEventListener("load", onLoad);
      }
    }
  }, [key]);
}
