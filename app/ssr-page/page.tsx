import { cookies } from "next/headers";

async function getData() {
  const nextCookies = cookies().getAll();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return { name: "John Doe", cookies: nextCookies };
}

export default async function SSRPage() {
  const { name } = await getData();
  return <h1>Welcome {name}</h1>;
}
