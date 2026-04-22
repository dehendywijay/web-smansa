import { NextRequest} from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "../../../../lib/prisma";


export const POST = async (req: NextRequest) => {
  const { email, password } = await req.json();
  try {
    const check = await prisma.admin.findFirst({
      where: {
        email: email,
      },
      select: {
        email: true,
      },
    });

    if (check) {
      return new Response(JSON.stringify({ error: "Email already exists" }), {
        status: 500,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await prisma.admin.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return new Response(
      JSON.stringify({ success: "User created successfully" }),
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response(JSON.stringify({ error: "User creation failed" }), {
      status: 501,
    });
  }
};
