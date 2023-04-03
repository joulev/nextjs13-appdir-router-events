"use client";

import NextLink from "next/link";
import { onStart } from "~/router-events";

// https://github.com/vercel/next.js/blob/400ccf7b1c802c94127d8d8e0d5e9bdf9aab270c/packages/next/src/client/link.tsx#L169
function isModifiedEvent(event: React.MouseEvent): boolean {
  const eventTarget = event.currentTarget as HTMLAnchorElement | SVGAElement;
  const target = eventTarget.getAttribute("target");
  return (
    (target && target !== "_self") ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey || // triggers resource download
    (event.nativeEvent && event.nativeEvent.which === 2)
  );
}

export default function Link({ href, onClick, ...rest }: React.ComponentProps<"a">) {
  const useLink = href && href.startsWith("/");
  if (useLink)
    return (
      <NextLink
        href={href}
        onClick={(event) => {
          if (!isModifiedEvent(event)) {
            const { pathname, search, hash } = window.location;
            if (href !== pathname + search + hash) onStart();
          }
          if (onClick) onClick(event);
        }}
        {...rest}
        ref={undefined} // change this if you need, with React.forwardRef
      />
    );
  return <a href={href} onClick={onClick} {...rest} />;
}
