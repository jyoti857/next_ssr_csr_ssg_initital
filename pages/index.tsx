import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Menu from '../components/menu/Menu';
import Layout from '../components/layout/Layout';
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1> Welcome to Home page</h1>

    </Layout>
  )
}
