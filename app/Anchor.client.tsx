"use client";

import Link from "next/link";
import { useContext } from "react";
import StartRouterChange from "~/StartRouterChangeContext.client";

export default function Anchor({ href, children }: React.ComponentProps<"a">) {
  const startChange = useContext(StartRouterChange);
  const useLink = href && href.startsWith("/");
  if (useLink)
    return (
      <Link href={href} onClick={startChange}>
        {children}
      </Link>
    );
  return <a href={href}>{children}</a>;
}
