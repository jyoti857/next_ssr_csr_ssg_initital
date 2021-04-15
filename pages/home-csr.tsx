import Head from 'next/head'
import { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import { Post } from '../types';
export default function HomeSrc() {

  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`);
      const posts: Post[] = await res.json();
      setPosts(posts);
    };
    getPosts(); 
  }, [])
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1> Welcome to Home page  {Date.now()}</h1>
      <h2>
        <ul>{posts.map(post => (
          <>
            <li>{post.title}</li>
            <li>{post.content}</li>
          </>
          ))}</ul>
      </h2>
    </Layout>
  )
}
