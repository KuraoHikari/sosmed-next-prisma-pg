import { NextResponse } from "next/server";
import { prisma } from "@/app/libs";
import { getCurrentUser } from "@/app/actions";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();

  const { title, content, imageSrc } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const post = await prisma.post.create({
    data: {
      title,
      content,
      images: [imageSrc],
      authorId: currentUser.id,
    },
  });

  return NextResponse.json(post);
}
