import { NextRequest } from "next/server";
import { prisma } from "../../../../lib/prisma";
import bcrypt from "bcryptjs";

export const POST = async (req: NextRequest) => {
  const { email, password } = await req.json();
  try {
    const check = await prisma.admin.findFirst({
      where: {
        email: email,
      },
      select: {
        email: true,
        password: true,
      },
    });

    if (!check) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 500,
      });
    }

    const isMatch = await bcrypt.compare(password, check.password);

    if (!isMatch) {
      return new Response(JSON.stringify({ error: "Invalid password" }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ success: "Login successful" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error during login:", error);
    return new Response(JSON.stringify({ error: "Login failed" }), {
      status: 501,
    });
  }
};
