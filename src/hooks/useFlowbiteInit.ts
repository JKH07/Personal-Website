import { useEffect } from "react";
import { initFlowbite } from "flowbite";

export function useFlowbiteInit() {
  useEffect(() => {
    initFlowbite();
  }, []);
}
