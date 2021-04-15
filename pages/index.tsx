import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Menu from '../components/menu/Menu';
import Layout from '../components/layout/Layout';
import { InferGetServerSidePropsType } from 'next';
import { getAllPosts } from '../lib/db';
export default function Home(props: InferGetServerSidePropsType<typeof getStaticProps>) {
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

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  return {props: {posts}}
}
