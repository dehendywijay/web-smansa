import { NextRequest } from "next/server"
import { prisma } from "../../../lib/prisma"

export  const POST = async(req:NextRequest) =>{
    const {title, thumbnail, content, imageUrl} = await req.json()

    const res = await prisma.berita.create({
        data: {
            title,
            thumbnail,
            content,
            imageUrl
        }
    })

    if(res){
    return new Response(JSON.stringify(res))
    }

}

export const GET = async() => {
    const res = await prisma.berita.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })
    return new Response(JSON.stringify(res))
}