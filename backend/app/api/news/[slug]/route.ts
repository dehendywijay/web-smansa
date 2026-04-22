import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export const GET = async (
  res: NextResponse,
  ctx: { params: Promise<{ slug: string }> },
) => {
  const { slug } = await ctx.params;

  const resp = await prisma.berita.findUnique({
    where: {
      id: slug,
    },
    select: {
      id: true,
      title: true,
      thumbnail: true,
      content: true,
      imageUrl: true,
    },
  });
  return new Response(JSON.stringify(resp));
};

export const PUT = async (
  req: NextRequest,
  ctx: { params: Promise<{ slug: string }> },
) => {
  const { slug } = await ctx.params;
  const { title, content } = await req.json();

  await prisma.berita.update({
    where: { id: slug },
    data: {
      title,
      content,
    },
  });

  return new Response(JSON.stringify("Data berhasil diupdate"), {
    status: 200,
  });
};

export const DELETE = async (
  req: NextRequest,
  ctx: { params: Promise<{ slug: string }> },
) => {
  const { slug } = await ctx.params;

  try {
    await prisma.berita.delete({
      where: { id: slug },
    });

    return new Response(JSON.stringify({ success: "Data berhasil dihapus" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error deleting news:", error);
    return new Response(JSON.stringify({ error: "Berita gagal dihapus" }), {
      status: 500,
    });
  }
};
