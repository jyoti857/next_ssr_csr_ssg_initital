import { useRouter } from 'next/router';
import Layout from '../../components/layout/Layout';

const ProductCategory = () => {
  const router = useRouter();
  return (
    <Layout>
      <h1>Router name: {router.query.category} </h1>
      <button onClick = {() => router.push('/')}>home</button>
    </Layout>
  )
}

export default ProductCategory;