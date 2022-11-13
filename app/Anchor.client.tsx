"use client";

import Link from "next/link";
import { useContext } from "react";
import StartRouterChange from "~/StartRouterChangeContext.client";

export default function Anchor({ href, style, children }: React.ComponentProps<"a">) {
  const startChange = useContext(StartRouterChange);
  const useLink = href && href.startsWith("/");
  if (useLink)
    return (
      <Link
        href={href}
        onClick={() => {
          const { pathname, search, hash } = window.location;
          if (href !== pathname + search + hash) startChange();
        }}
        style={style}
      >
        {children}
      </Link>
    );
  return (
    <a href={href} style={style}>
      {children}
    </a>
  );
}
