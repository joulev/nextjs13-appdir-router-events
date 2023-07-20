"use client";

import { usePathname } from "next/navigation";
import { Link } from "~/lib/router-events";

export default function NavLink({ href, children }: React.PropsWithChildren<{ href: string }>) {
  const pathname = usePathname();
  return (
    <Link href={href} style={{ fontWeight: pathname === href ? "bold" : undefined }}>
      {children}
    </Link>
  );
}
