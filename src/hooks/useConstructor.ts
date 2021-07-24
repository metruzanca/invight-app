import { useRef } from "react";

export function useConstructor(callback: () => void) {
  const isFirstCall = useRef(true);
  if(isFirstCall.current) {
    isFirstCall.current = false;
    callback();
  }
}