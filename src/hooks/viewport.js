import { useCallback, useEffect, useRef, useState } from "react";

export function useInViewPort({ fullyIn = true }) {
  const elemRef = useRef(null);
  const inViewPortChecker = fullyIn ? isInViewPortFully : isInViewPortPartially;
  const [isInViewPort, setIsInViewPort] = useState(false);
  const checkAndSet = useCallback(() => {
    if (!elemRef.current) {
      return;
    }
    if (isInViewPort) {
      return;
    }
    const { top, bottom } = elemRef.current.getBoundingClientRect();
    const wHeight = innerHeight;
    if (inViewPortChecker({ top, bottom, wHeight })) {
      setIsInViewPort(true);
    }
  }, [isInViewPort, elemRef]);

  useEffect(() => {
    checkAndSet();
  }, [checkAndSet]);

  useEffect(() => {
    if (!window) {
      return;
    }
    window.addEventListener("scroll", checkAndSet);
    return () => window.removeEventListener("scroll", checkAndSet);
  }, [checkAndSet]);

  useEffect(
    () => () => {
      setIsInViewPort(false);
    },
    []
  );

  return { isInViewPort, elemRef };
}

export function isInViewPortPartially({ top, bottom, wHeight }) {
  return (0 < top && top < wHeight) || (0 < bottom && bottom < wHeight);
}

export function isInViewPortFully({ top, bottom, wHeight }) {
  return 0 < top && top < wHeight && 0 < bottom && bottom < wHeight;
}
