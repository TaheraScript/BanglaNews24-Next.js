import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

// Get MongoDB connection URL from environment variables
const mongoUrl = process.env.MONGODB_URL;

// Check if MongoDB URL exists
// This gives a clear error instead of:
// "Cannot read properties of undefined (reading 'startsWith')"
if (!mongoUrl) {
  throw new Error("MONGODB_URL is not defined in the environment variables");
}

// Create MongoDB client
const client = new MongoClient(mongoUrl);

// Select your database
const db = client.db("bangla-news-24");

export const auth = betterAuth({
  // Enable email/password authentication
  emailAndPassword: {
    enabled: true,
  },

  // Social authentication providers
  socialProviders: {
    google: {
      // Google OAuth Client ID
      clientId: process.env.GOOGLE_CLIENT_ID as string,

      // Google OAuth Client Secret
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },

    github: {
      // GitHub OAuth Client ID
      clientId: process.env.GITHUB_CLIENT_ID as string,

      // GitHub OAuth Client Secret
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },

  // Connect Better Auth with MongoDB
  database: mongodbAdapter(db, {
    client,
  }),
});