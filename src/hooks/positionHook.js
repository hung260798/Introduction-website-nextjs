import { currentPosition, reducer } from "@/reducers/positionReducer";
import { useContext, useEffect, useReducer } from "react";
import ctx from "@/context/navigation";

export function usePosition(isInViewPort, href) {
  const { dispatch } = useContext(ctx);
  useEffect(() => {
    if (isInViewPort) {
      dispatch({
        type: "set",
        href,
      });
    }
  }, [isInViewPort]);
  // return position;
}
