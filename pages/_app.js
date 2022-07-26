import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from '../components/admin/Layout';

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
  
  // return (
  //   <Layout>
  //     <Component {...pageProps} />
  //     <ToastContainer
  //           position="top-right"
  //           autoClose={8000}
  //           hideProgressBar={false}
  //           newestOnTop={false}
  //           draggable={false}
  //           closeOnClick
  //           pauseOnHover
  //       />
  //   </Layout>
  // )
  
}

export default MyApp
