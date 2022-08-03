
import Link  from 'next/link';
import Layout from "../../components/admin/Layout"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Axios from "../../utils/axios";
import Login from './login';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {

    const { user } = Axios();
    const router = useRouter();

    useEffect(()=>{
        if(!user){
            router.push("/admin/login");
        }
    })

  return (
    <>
     <div className="page-header">
        <div>
            <h1 className="page-title">Create Categories</h1>
          
        </div>
        <div className="ms-auto pageheader-btn">
            <Link href="/admin/blog/category">
            <a  className="btn btn-primary btn-icon text-white me-2">Back To CategoryList</a>
            </Link>
            
        </div>
    </div>

    <form >
	<div className="row">
		<div className="col-lg-9 col-xl-9 col-md-12 col-sm-12">
			<div className="card">
				<div className="card-header">
					<h3 className="card-title">Create Blog Category</h3>
				</div>
				<div className="card-footer text-end">
					<button type="submit" className="btn btn-success mt-1">
                        Create
                    </button>
				</div>
			</div>
		</div>

		{/* {{-- Right Side --}} */}
		
	</div>
    </form>
    </>
  );
}           

Dashboard.getLayout = function getLayout(page) {
    return (
        <>
        <Layout>
            {page}
            <ToastContainer
                position="top-right"
                autoClose={8000}
                hideProgressBar={false}
                newestOnTop={false}
                draggable={false}
                closeOnClick
                pauseOnHover
            />
        </Layout>
        </>
        
        
    
    )
}