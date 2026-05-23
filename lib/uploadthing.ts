import { createUploadthing, type FileRouter } from "uploadthing/next";
import { generateUploadButton } from "@uploadthing/react";

const f = createUploadthing();

export const ourFileRouter = {
  blogImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(() => ({}))
    .onUploadComplete(({ file }) => ({ url: file.ufsUrl })),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

export const UploadButton = generateUploadButton<OurFileRouter>();
// /