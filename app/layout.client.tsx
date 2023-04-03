"use client";

import { useOnComplete } from "~/router-events";

export default function RootLayoutClient({ children }: React.PropsWithChildren) {
  useOnComplete();
  return <>{children}</>;
}
