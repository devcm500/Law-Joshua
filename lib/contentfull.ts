import { createClient } from "contentful";

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!space || !accessToken) {
  throw new Error(
    "CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN environment variables are required. " +
      "Add them to .env.local for local development or to your Vercel project settings for deployment."
  );
}

export const client = createClient({ space, accessToken });
