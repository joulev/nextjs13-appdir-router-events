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
      
      const [href] = args;
      if (href === window.location.href) {
        onComplete();
      }
    },
    replace: (...args) => {
      onStart();
      router.replace(...args);

      const [href] = args;
      if (href === window.location.href) {
        onComplete();
      }
    },
    prefetch: router.prefetch,
  };
}
