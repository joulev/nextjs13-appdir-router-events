"use client";

import { usePathname } from "next/navigation";
import Link from "~/link";
import { useOnComplete } from "~/router-events";

function NavLink({ href, children }: React.PropsWithChildren<{ href: string }>) {
  const pathname = usePathname();
  return (
    <Link href={href} style={{ fontWeight: pathname === href ? "bold" : undefined }}>
      {children}
    </Link>
  );
}

export default function RootLayoutClient({ children }: React.PropsWithChildren) {
  useOnComplete();
  return (
    <>
      {children}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem 2rem" }}>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/ssr-page">SSR page</NavLink>
      </div>
    </>
  );
}
