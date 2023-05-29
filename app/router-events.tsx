import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import { Suspense, useEffect } from "react";

export function onStart() {
  NProgress.start();
}

export function onComplete() {
  NProgress.done();
}

function useOnComplete() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => onComplete(), [pathname, searchParams]);
}

function __RouterEvents() {
  useOnComplete();
  return null;
}

/**
 * Using `useSearchParams` in SSG will cause the tree up to the closest `Suspense` to be client-side rendered.
 * You don't want that. Hence we need to wrap usage of `useOnComplete` inside `Suspense`. *Only* this
 * `__RouterEvents` component is client-side rendered, the rest is kept intact.
 *
 * However, if you don't use `useSearchParams` in `useOnComplete` above, you can simply import and use
 * `useOnComplete` in `app/layout.client.tsx` directly.
 */
export function RouterEvents() {
  return (
    <Suspense>
      <__RouterEvents />
    </Suspense>
  );
}
