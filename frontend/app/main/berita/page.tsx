"use client";

import Footer from "@/components/footer";
import Sidebar from "@/components/SideNews";
import PageBreadcrumb from "@/components/ui/PageBreadcrumb";
import PageHero from "@/components/ui/PageHero";
import { useNews } from "@/hook/useNews";
import { formatDate } from "@/lib/date";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NewsList() {
  const { news: newsList, loading, error } = useNews();

  return (
    <main className="bg-white min-h-screen">
      <PageHero title="Berita Terbaru" imageUrl="./img/1.jpg" alt="Hero Background" heightClassName="h-80" />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Berita Terbaru" }]} />

      <section className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto px-6 py-10">
        <div className="md:col-span-3">
          {/* Controls Bar */}
          <div className="flex items-center justify-between bg-gray-50 p-3 mb-8 border border-gray-100">
            <div className="flex items-center gap-2 text-red-600">
              <button className="p-1 hover:bg-gray-200 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-200 rounded text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <line x1="3" y1="6" x2="3.01" y2="6"></line>
                  <line x1="3" y1="12" x2="3.01" y2="12"></line>
                  <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
              </button>
              <span className="ml-4 text-sm text-gray-500">
                Showing 1-{Math.min(newsList.length, 10)} of {newsList.length} results
              </span>
            </div>
          </div>

          {/* News List */}
          {loading ? (
            <p>Loading news...</p>
          ) : error ? (
            <p className="text-red-600">{error}</p>
          ) : (
            <div className="space-y-12">
              {newsList.map((post) => (
                <article key={post.id} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative h-48 md:h-auto w-full group overflow-hidden">
                    {post.thumbnail ? (
                      <Link href={`/berita/${post.id}`}>
                        <Image src={`http://localhost:3001/uploads/${post.thumbnail}`} alt={post.title} fill className="object-cover group-hover:scale-105 transition duration-500" />
                      </Link>
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">No Image</div>
                    )}
                  </div>
                  <div className="md:col-span-2 flex flex-col justify-center">
                    <h2 className="text-xl font-bold text-gray-900 hover:text-red-700 transition lg:text-2xl mb-3">
                      <Link href={`/berita/${post.id}`}>{post.title}</Link>
                    </h2>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-sm text-gray-500 mb-4 font-semibold">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 font-light">Posted by</span>
                        <span className="text-gray-800">Admin</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 font-light">Categories</span>
                        <span className="text-gray-800">Berita Terbaru, Info</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-800 mb-4 font-bold">{formatDate(post.createdAt)}</div>
                    <p className="text-gray-600 line-clamp-3 leading-relaxed text-sm md:text-base" dangerouslySetInnerHTML={{ __html: post.content || "No excerpt available..." }} />
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1">
          <Sidebar />
        </div>
      </section>

      <Footer />
    </main>
  );
}
