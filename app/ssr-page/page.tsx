async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return { name: "John Doe" };
}

export default async function SSRPage() {
  const { name } = await getData();
  return <h1>SSR page with name = {name}</h1>;
}

export const dynamic = "force-dynamic";
