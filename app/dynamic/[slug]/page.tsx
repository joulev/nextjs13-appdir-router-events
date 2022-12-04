export default function DynamicPage({ params }: { params: { slug: string } }) {
  return <h1>Dynamic page at slug = {params.slug}</h1>;
}

export function generateStaticParams() {
  return [{ slug: "foo" }, { slug: "bar" }];
}
