import { Options } from "@/app/Options";
import NextAuth from "next-auth/next";

const handler = NextAuth(Options);

export { handler as GET, handler as POST }