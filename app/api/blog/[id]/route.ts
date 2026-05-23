import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Params = { params: { id: string } };

/* GET single post by id or slug */
export async function GET(_req: NextRequest, { params }: Params) {
  try {
    const id = parseInt(params.id, 10);
    const post = isNaN(id)
      ? await prisma.blogPost.findUnique({ where: { slug: params.id } })
      : await prisma.blogPost.findUnique({ where: { id } });

    if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(post);
  } catch {
    return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 });
  }
}

/* PUT — update post */
export async function PUT(req: NextRequest, { params }: Params) {
  try {
    const id = parseInt(params.id, 10);
    const body = await req.json();
    const { title, slug, excerpt, content, coverImage } = body;

    const post = await prisma.blogPost.update({
      where: { id },
      data: { title, slug, excerpt, content, coverImage },
    });

    return NextResponse.json(post);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Failed to update post";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

/* DELETE */
export async function DELETE(_req: NextRequest, { params }: Params) {
  try {
    const id = parseInt(params.id, 10);
    await prisma.blogPost.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
  }
}
