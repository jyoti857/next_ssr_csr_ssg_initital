import mysql from 'serverless-mysql';
import { Post } from '../types';
import mySql from 'mysql';
const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,

  }
});


// get post by id 
export const getPostById = async(id: number) => {
  const post = await db.query<Post[]>('select * from posts where id = ?', [id]);
  await db.end();
  return post.length ? {id: post[0].id, title: post[0].title, content: post[0].content} : undefined;
}


export const getAllPosts = async() => {
  const posts = await db.query<Post[]>("select * from posts order by id desc;");
  await db.end();
  return posts.map(({id, title, content}) => ({id, title, content}));
}

// post a post to the db
export const createPost = async(title: string, content: string ) => {
  const newPost = await db.query<mySql.OkPacket>('insert into posts (title, content) values(?, ? )',
      [title, content]
    );
    await db.end();
    return newPost;
}
export default db;
