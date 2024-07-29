import Link from "next/link";
import Card from "./components/card";
import { getImages } from "./lib/data";

export default async function Home() {
  const images = await getImages();
  return (
    <div className="max-w-screen-lg mx-auto py-14">
      <div className="flex items-end justify-between">
        <h1 className="text-4xl font-bold">Latest Images</h1>
        <Link
          href="/create"
          className="py-3 px-6 rounded-lg bg-blue-600 hover:to-blue-700"
        >
          New image
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-5 mt-10">
        {images.map((i) => (
          <Card key={i.id} data={i} />
        ))}
      </div>
    </div>
  );
}
