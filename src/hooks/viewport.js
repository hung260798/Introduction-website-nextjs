import { useCallback, useEffect, useState } from "react";

export function useInViewPort({
  elemRef,
  inViewPortChecker,
}) {
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
  }, [isInViewPort, elemRef, inViewPortChecker]);

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

  return isInViewPort;
}
