"use client";

import { RouterEvents } from "~/router-events";

export default function RootLayoutClient({ children }: React.PropsWithChildren) {
  return (
    <>
      {children}
      <RouterEvents />
    </>
  );
}
