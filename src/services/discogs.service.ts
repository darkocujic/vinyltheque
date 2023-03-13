import { Client as Discogs } from "disconnect";

const userAgent = `VinylTheque/1.0`;

const discogs = new Discogs();

// {
//   userToken: process.env.DISCOGS_PERSONAL_TOKEN,
// }

export default discogs;
