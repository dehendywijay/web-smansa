import axios from "axios";
import { News } from "@/types/type";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3001/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export async function fetchNewsList(): Promise<News[]> {
  const { data } = await apiClient.get<News[]>("/news");
  return data;
}

export async function fetchNewsBySlug(slug: string): Promise<News> {
  const { data } = await apiClient.get<News>(`/news/${slug}`);
  return data;
}
