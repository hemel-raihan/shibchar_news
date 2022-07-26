import Link from "next/link";
import Layout from '../components/admin/Layout';
import FrontLayout from '../components/frontend/FrontLayout';


export default function Homepage() {
  

  return (
    <>
      <h1>Helloo</h1>
    </>
  );
}

Homepage.getLayout = function getLayout(page) {
    return (
      // <Layout>
        <FrontLayout>{page}</FrontLayout>
      // </Layout>
    )
}