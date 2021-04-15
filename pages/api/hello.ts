// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"
import mysql from 'serverless-mysql';


const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,

  }
});

// export default (req: NextApiRequest, res: NextApiResponse) => {
//   res.status(200).json({ name: 'John Doe' })
// }

export default async(req: NextApiRequest, res: NextApiResponse) => {
  const posts = await db.query("select * from posts;");
  await db.end();
  res.status(201).json(posts);
}
