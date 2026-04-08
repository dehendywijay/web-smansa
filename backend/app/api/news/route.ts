import { NextRequest } from "next/server"
import { prisma } from "../../../lib/prisma"

export const POST = async (req: NextRequest) => {
  const formData = await req.formData()

  const title = formData.get('title') as string
  const content = formData.get('content') as string
  const image = formData.get('image') as File

  console.log(title, content, image)

  const imageName = image.name 

  const res = await prisma.berita.create({
    data: {
      title,
      content,
      thumbnail: imageName, 
    }
  })

  return new Response(JSON.stringify(res))
}

export const GET = async() => {
    const res = await prisma.berita.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })
    return new Response(JSON.stringify(res))
}