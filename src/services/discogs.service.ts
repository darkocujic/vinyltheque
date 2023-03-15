import { Client as Discogs } from "disconnect";

const userAgent = `VinylTheque/1.0`;

const consumerKey = process.env.DISCOGS_CONSUMER_KEY;
const consumerSecret = process.env.DISCOGS_SECRET;

if (!consumerKey || !consumerSecret) throw new Error("set env vars");

const discogs = new Discogs(userAgent, {
  consumerKey,
  consumerSecret,
});

// alternative
// const discogs = new Discogs(userAgent, {
//   userToken: process.env.DISCOGS_PERSONAL_TOKEN!,
// });

export default discogs;
