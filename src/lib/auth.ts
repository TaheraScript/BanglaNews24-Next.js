import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

// CHANGED: read the env vars into constants and fail with a clear message.
// Before, `as string` only hid the problem from TypeScript, so a missing
// variable crashed deep inside MongoClient with "reading 'startsWith'".
const mongoUrl = process.env.MONGODB_URL;
if (!mongoUrl) {
  throw new Error("MONGODB_URL is not set. Add it in your hosting env settings.");
}

const client = new MongoClient(mongoUrl); // CHANGED: uses the checked value
const db = client.db("bangla-news-24");

export const auth = betterAuth({
  // ADDED: tells Better Auth its own public URL. Locally it falls back to
  // localhost; in production set BETTER_AUTH_URL to your Vercel domain.
  baseURL: process.env.BETTER_AUTH_URL,

  // ADDED: secret used to sign sessions and cookies. Required in production.
  secret: process.env.BETTER_AUTH_SECRET,

  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
  database: mongodbAdapter(db, {
    client,
  }),
});