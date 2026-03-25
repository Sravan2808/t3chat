import { PrismaClient } from "../generated/prisma/client";

const db = globalThis.prisma || new PrismaClient({
  log: ["query", "info", "warn", "error"],
});
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
export default db;
