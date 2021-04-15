import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../lib/db';


export default async(req: NextApiRequest, res: NextApiResponse) => {

  if(req.method == "GET"){
    
    const id = req.query.id;
    const post = await db.query<{id: number; title: string; content: string}[]>('select * from posts where id = ?', [id]);
    await db.end();

    if(post.length){
      res.statusCode = 200;
      res.json(post);
    }else{
      res.statusCode = 404;
      res.json({error_message: 'post not found!!'})
    }
  }else{}
}