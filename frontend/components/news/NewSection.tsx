"use client";

import { useNews } from "@/hook/useNews";
import NewsCard from "./NewsCard";

export default function NewsSection() {
  const { news, loading, error } = useNews();

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <section className="max-w-7xl mx-auto py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">BERITA TERBARU</h2>
        <p className="text-red-500 mt-2">Dapatkan Informasi Up To Date SMA N 1 BANGUNREJO</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {news.slice(0, 6).map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>
    </section>
  );
}
