"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
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

function NavLink({ href, children }: React.PropsWithChildren<{ href: string }>) {
  const pathname = usePathname();
  return (
    <Anchor href={href} style={{ fontWeight: pathname === href ? "bold" : undefined }}>
      {children}
    </Anchor>
  );
}

export default function RootLayoutClient({ children }: React.PropsWithChildren) {
  const onStart = useCallback(() => NProgress.start(), []);
  const onComplete = useCallback(() => NProgress.done(), []);
  return (
    <RouterEventWrapper onStart={onStart} onComplete={onComplete}>
      {children}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem 2rem" }}>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/ssr-page">SSR page</NavLink>
        <NavLink href="/dynamic">Dynamic home</NavLink>
        <NavLink href="/dynamic/foo">Dynamic foo</NavLink>
        <NavLink href="/dynamic/bar">Dynamic bar</NavLink>
      </div>
    </RouterEventWrapper>
  );
}
