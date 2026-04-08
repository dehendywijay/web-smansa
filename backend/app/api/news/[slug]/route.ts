import { NextResponse } from "next/server"
import { prisma } from "../../../../lib/prisma"

export const GET = async (res : NextResponse,  
    ctx: { params: Promise<{ slug: string }> }) => {
    const { slug } = await ctx.params;
    const id = slug

    console.log("tes",id)
    const resp = await prisma.berita.findUnique({
        where: {
            id: slug
        },select: {
            id: true,
            title: true,
            thumbnail: true,
            content: true,
            imageUrl: true
        }
    })
    return new Response(JSON.stringify(resp))
}