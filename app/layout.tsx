import "~/globals.css";
import RootLayoutClient from "~/layout.client";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <RootLayoutClient>{children}</RootLayoutClient>
        <div>
          <a href="https://github.com/joulev/nextjs13-router-events">View source on GitHub</a>
        </div>
        <div>
          <a href="https://github.com/vercel/next.js/discussions/41745#discussioncomment-4127651">
            Original idea
          </a>{" "}
          by <a href="https://github.com/ErAz7">@ErAz7</a>
        </div>
      </body>
    </html>
  );
}
