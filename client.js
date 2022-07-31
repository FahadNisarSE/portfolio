import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: 'r5h73u78',
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.NEXT_APP_SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)