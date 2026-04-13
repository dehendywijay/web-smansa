import { NextRequest } from "next/server";
import { prisma } from "../../../lib/prisma";
import { writeFile } from "fs/promises";
import path from "path";

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const file = formData.get("image") as File;

    let filePath = " ";
    let fileName = " ";

    if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      fileName = Date.now() + "-" + file.name;
      const uploadDir = path.join(process.cwd(), "public/uploads");

      await writeFile(`${uploadDir}/${fileName}`, buffer);

      filePath = `/uploads/${fileName}`;
    }

    const res = await prisma.berita.create({
      data: {
        title,
        content,
        thumbnail: fileName,
      },
    });

    return new Response(JSON.stringify({ success: "Berita berhasil dibuat" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error creating news:", error);
    return new Response(JSON.stringify({ error: "Berita gagal dibuat" }), {
      status: 500,
    });
  }
};

export const GET = async () => {
  const res = await prisma.berita.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return new Response(JSON.stringify(res));
};
