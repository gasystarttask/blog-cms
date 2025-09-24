// lib/prisma.ts
import { PrismaClient } from "@blog-cms/generated/prisma";

declare global {
  // Allow global `var` in TypeScript
  // Prevent multiple instances of PrismaClient in dev (hot reload)
  // This avoids "PrismaClient is already running" errors.
  // `globalThis` is reset only in prod, not in dev hot reload.
   
  var prisma: PrismaClient | undefined;
}

const prisma =
  globalThis.prisma ??
  new PrismaClient({
    log: ["query", "info", "warn", "error"], // optional logging
  });

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

export default prisma;
