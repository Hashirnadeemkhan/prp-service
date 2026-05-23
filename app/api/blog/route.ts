import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/* GET — list all posts */
export async function GET() {
  try {
    const posts = await prisma.blogPost.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

/* POST — create new post */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, slug, excerpt, content, coverImage } = body;

    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: "Title, slug, and content are required" },
        { status: 400 }
      );
    }

    const post = await prisma.blogPost.create({
      data: { title, slug, excerpt: excerpt || "", content, coverImage: coverImage || null },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Failed to create post";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
