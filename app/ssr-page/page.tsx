import { cookies } from "next/headers";
import Anchor from "~/Anchor.client";

async function getData() {
  const nextCookies = cookies().getAll();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return { name: "John Doe", cookies: nextCookies };
}

export default async function SSRPage() {
  const { name } = await getData();
  return (
    <main>
      <h1>SSR Page</h1>
      <div>Name = {name}</div>
      <Anchor href="/">Home</Anchor>
    </main>
  );
}
