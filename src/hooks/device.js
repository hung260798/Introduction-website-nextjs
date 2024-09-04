import { useEffect, useState } from "react";

export function useDeviceType() {
  const [device, setDevice] = useState("Desktop");
  useEffect(() => {
    if (navigator) {
      setDevice(
        /Mobile|Android|iPhone|iPad/i.test(navigator.userAgent)
          ? "Mobile"
          : "Desktop"
      );
    }
  }, []);
  return device;
}
