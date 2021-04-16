import Head from 'next/head'
import Layout from '../components/layout/Layout';
import { InferGetServerSidePropsType } from 'next';
import { getAllPosts } from '../lib/db';
import Link from 'next/link';
export default function Home(props: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1> Welcome to Home page  {Date.now()}</h1>
      <h3>
        <Link href = "/create-post"  as = "/create-post"><a>Create</a></Link></h3>
      <h2>
        <ul>{props.posts.map(post => (
          <li key = {post.id}>
            <Link href = '/posts/[id]' as = {`/posts/${post.id}`}>
              <a>
                {post.title}
              </a>
            </Link>
          </li>
            // {/* <li>{post.content}</li> */}
          ))}</ul>
      </h2>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  return {props: {posts}}
}
