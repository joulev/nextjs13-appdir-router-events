"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname, useSearchParams, useSelectedLayoutSegment } from "next/navigation";
import NProgress from "nprogress";
import Anchor from "~/Anchor.client";
import StartRouterChangeContext from "~/StartRouterChangeContext.client";

function RouterEventWrapper({
  onStart = () => {},
  onComplete = () => {},
  children,
}: React.PropsWithChildren<{ onStart?: () => void; onComplete?: () => void }>) {
  const [isChanging, setIsChanging] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => setIsChanging(false), [pathname, searchParams]);

  useEffect(() => {
    if (isChanging) onStart();
    else onComplete();
  }, [isChanging]);

  return (
    <StartRouterChangeContext.Provider value={() => setIsChanging(true)}>
      {children}
    </StartRouterChangeContext.Provider>
  );
}

export default function RootLayoutClient({ children }: React.PropsWithChildren) {
  const onStart = useCallback(() => NProgress.start(), []);
  const onComplete = useCallback(() => NProgress.done(), []);
  const segment = useSelectedLayoutSegment();
  return (
    <RouterEventWrapper onStart={onStart} onComplete={onComplete}>
      {children}
      <div style={{ display: "flex", gap: "2rem" }}>
        <Anchor href="/" style={{ fontWeight: segment === null ? "bold" : undefined }}>
          Home
        </Anchor>
        <Anchor
          href="/ssr-page"
          style={{ fontWeight: segment === "ssr-page" ? "bold" : undefined }}
        >
          SSR Page
        </Anchor>
      </div>
    </RouterEventWrapper>
  );
}
