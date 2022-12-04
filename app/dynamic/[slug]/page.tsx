export default function DynamicPage({ params }: { params: { slug: string } }) {
  return <h1>Dynamic page at slug = {params.slug}</h1>;
}

export async function generateStaticParams() {
  await new Promise<void>((resolve) =>
    setTimeout(() => {
      console.log("\x1b[31m========= The timeout was run =========\x1b[30m");
      resolve();
    }, 1000),
  );
  return [{ slug: "foo" }, { slug: "bar" }];
}
