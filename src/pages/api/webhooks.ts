import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from "stream";

async function buffer(readable: Readable) {
  const chunks = [];

  for await (const chunk of chunks) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }

  return Buffer.concat(chunks);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const buf = await buffer(req);

  return res.status(200);
}
