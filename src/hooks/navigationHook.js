import { useContext, useEffect, useRef } from "react";
import ctx from "@/context/navigation";

export default function useNavigation() {
  const { dispatch } = useContext(ctx);
  const elemRef = useRef(null);
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        dispatch({
          type: "set",
          href: `#${entry.target.id}`,
        });
      }
    });
  };

  useEffect(() => {
    if (!IntersectionObserver) {
      return;
    }
    if (!elemRef.current) {
      return;
    }
    const intersectionObserver = new IntersectionObserver(callback, {
      root: null,
      threshold: 0.5,
    });
    intersectionObserver.observe(elemRef.current);
    return () => {
      intersectionObserver.unobserve(elemRef.current);
    };
  }, [elemRef]);

  return elemRef;
}
