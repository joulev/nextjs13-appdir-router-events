import "~/globals.css";
import RootLayoutClient from "~/layout.client";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
        <a
          href="https://github.com/joulev/nextjs13-router-events"
          target="_blank"
          rel="noopener noreferrer"
        >
          View source on GitHub
        </a>
      </body>
    </html>
  );
}
