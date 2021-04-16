import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import { getAllPosts, getPostById } from "../../lib/db";
import { Post } from "../../types"

export default function postPage({post}: InferGetStaticPropsType<typeof getStaticProps>){

  return(
    <Layout>
      <Head>
        <title>post {post.id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style = {{
          backgroundColor: 'green', height: 90, display: 'flex', 
          justifyContent: 'center', alignItems: 'center', margin: '23px 60px 23px 100px',
          borderRadius: 23}}>
        <h4>{post.title}</h4>
        <h6>{post.content}</h6>
      </div>
      {/* <Link herf = "/" as='/'><a>home</a></Link> */}
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async() => {
  const posts = await getAllPosts();
  return {
    paths: posts.map(post => {
      return {params: {id: `${post.id}`}}
    }),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps<{post: Post}> = async (context) => {
  const id = typeof context.params?.id === 'string' ? parseInt(context.params?.id, 10) : undefined;
  const post = id ? await getPostById(id) : undefined;
  
  if(!post) throw new Error(`provided ${id} is not found!`);
  
  return {props: {post}}

} 