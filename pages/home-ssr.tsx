import Head from 'next/head'
import Layout from '../components/layout/Layout';
import { InferGetServerSidePropsType } from 'next';
import { getAllPosts } from '../lib/db';
export default function HomeSrc(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1> Welcome to Home page  {Date.now()}</h1>
      <h2>
        <ul>{props.posts.map(post => (
          <>
            <li>{post.title}</li>
            <li>{post.content}</li>
          </>
          ))}</ul>
      </h2>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const posts = await getAllPosts();
  return {props: {posts}}
}
