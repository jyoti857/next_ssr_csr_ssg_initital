import Layout from "../components/layout/Layout"
import {useForm} from 'react-hook-form';
import { useRouter } from "next/router";
import Head from "next/head";

interface Values {
  title: string;
  content: string;
}
const createPost = () => {
  const {register, handleSubmit} = useForm<Values>();
  const router = useRouter();
  const onSubmit = async (values: Values) =>{
    console.log("values ---> ", values)
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
      method: 'POST',
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify(values),
    });
    router.push('/');
  };
  return (
    <Layout> 
      <Head>
        <title>create post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form onSubmit = {handleSubmit(onSubmit)}>
        <div>
          <label>Title</label>
          <input  {...register("title")} />
        </div>
        <div>
          <label>Content</label>
          <textarea {...register("content")} />
        </div>
        <button
          >Create</button>
      </form>
    </Layout>
  )
}

export default createPost;