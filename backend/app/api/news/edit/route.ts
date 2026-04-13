import { NextRequest } from "next/server";
import { prisma } from "../../../../lib/prisma";

async function getUserIdFromRequest(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader) throw new Error("Unauthorized");

  const slug = authHeader.split(" ")[1];
  return slug as string;
}

export const PUT = async (
  req: NextRequest,
  { params }: { params: { slug: string } },
) => {
  const slug = params.slug;
  const { title, content } = (await req.json()) ?? " ";

  let res = null;
  if (title === undefined) {
    res = await prisma.berita.update({
      where: { id: slug },
      data: {
        content,
      },
    });
    return new Response(JSON.stringify("Data berhasil diupdate"), {
      status: 200,
    });
  } else {
    res = await prisma.berita.update({
      where: { id: slug },
      data: {
        title,
        content,
      },
    });
    return new Response(JSON.stringify("Data berhasil diupdate"), {
      status: 200,
    });
  }
};
