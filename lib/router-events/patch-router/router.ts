import { useRouter as useRouterOriginal } from "next/navigation";

import { onStart } from "../events";

export function useRouter(): ReturnType<typeof useRouterOriginal> {
  const router = useRouterOriginal();
  return {
    back: (...args) => {
      onStart();
      router.back(...args);
    },
    forward: (...args) => {
      onStart();
      router.forward(...args);
    },
    refresh: (...args) => {
      onStart();
      router.refresh(...args);
    },
    push: (...args) => {
      onStart();
      router.push(...args);
    },
    replace: (...args) => {
      onStart();
      router.replace(...args);
    },
    prefetch: router.prefetch,
  };
}
