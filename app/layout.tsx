import "./globals.css";

import { HandleOnComplete } from "~/lib/router-events";

import NavLink from "./nav-link";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        {children}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem 2rem" }}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/dynamic-page">Dynamic page</NavLink>
        </div>
        <div>
          <a href="https://github.com/joulev/nextjs13-router-events">View source on GitHub</a>
        </div>
        <div>
          <a href="https://github.com/vercel/next.js/discussions/41745#discussioncomment-4127651">
            Original idea
          </a>{" "}
          by <a href="https://github.com/ErAz7">@ErAz7</a>
        </div>
        <HandleOnComplete />
      </body>
    </html>
  );
}

export const metadata = {
  title: "Next.js 13 router events example",
};
