// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"
import mysql from 'mysql';

import db, { getAllPosts } from '../../../lib/db';



// export default (req: NextApiRequest, res: NextApiResponse) => {
//   res.status(200).json({ name: 'John Doe' })
// }

export default async(req: NextApiRequest, res: NextApiResponse) => {

  if(req.method === 'GET'){
   const posts = await getAllPosts();
    res.status(201).json(posts);
  }else if(req.method === 'POST'){
    const body: {title: string; content: string} = req.body;

    const newPost = await db.query<mysql.OkPacket>('insert into posts (title, content) values(?, ? )',
      [body.title, body.content]
    );

    await db.end();

    res.statusCode = 201;
    res.json({id: newPost.insertId, title: body.title, content: body.content});
  }
}
