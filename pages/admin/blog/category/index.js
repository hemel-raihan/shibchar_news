import React,{ useState } from "react";
import Link  from 'next/link';
//import moment from 'moment';
import toast from "../../../../components/admin/Toast/index";
import useFetch from './../../../../hooks/useFetch';
import Layout from "../../../../components/admin/Layout"
import Axios from '../../../../hooks/axios';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function tableList() {

  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);

  const {http} = Axios();

  const {data, loading, error, reFetch} = useFetch(`${process.env.NEXT_PUBLIC_DOMAIN}/blog/categories`)

 async function deleteCategory(id, parentId)
 {
//   setLoading(true);
  await http.delete(`${process.env.NEXT_PUBLIC_DOMAIN}/blog/categories/${id}/${parentId}`)
    .then((res)=>{
      notify("success", "successfully has been deleted!");
    //   setLoading(false);
    });
    reFetch()
 }

  if (loading)
    return (
      <>
        <div id="global-loader">
			<img src="/assets/images/loader.svg" className="loader-img" alt="Loader" />
		</div>
      </>
    );

  return (
    <>
      {/* <HeadSection title="All-Leave-Categories" /> */}

            <div className="page-header">
                <div>
                    <h1 className="page-title">Blog Management</h1>
                </div>

                <div className="ms-auto pageheader-btn">
                    <Link href="category/create">
                        <a className="btn btn-primary btn-icon text-white me-2">
                            <span>
                                <i className="fe fe-plus"></i>
                            </span> Create New Category
                        </a>
                    </Link>
                    
                </div>
            </div>

    <div className="row row-sm">
        <div className="col-lg-12">
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">All Categories</h3>
                </div>
            <div className="card-body">
                <div className="table-responsive export-table">
                    <table id="file-datatable" className="table table-bordered text-nowrap key-buttons border-bottom  w-100">
                        <thead>
                            <tr>
                                <th className="border-bottom-0">Name</th>
                                <th className="border-bottom-0">Category</th>
                                <th className="border-bottom-0">Posts</th>
                                <th className="border-bottom-0">Action</th>

                            </tr>
                        </thead>
                        <tbody>
                        {data &&
                        data.map((category, index) => (
                            <tr key={index}>
                                <td>{category.name}</td>
                                <td>
                                    {category.parentId == null ? (
                                        <a className="btn btn-primary">Main-Category</a>
                                    ) : (
                                        <a className="btn btn-info">Sub-Category</a>
                                    )}
                                </td>
                                <td>{category.posts.length}</td>

                                <td>
                                    <Link href={`category/edit/${category._id}`}>
                                        <a className="btn btn-success">
                                          <i className="fa fa-edit"></i>
                                        </a>
                                    </Link>
                                    

                                    <button className="btn btn-danger waves effect" type="button"
                                         onClick={() => deleteCategory(category._id, category?.parentId || 0)}  >
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </td>

                            </tr>
                            ))}
                        </tbody>
                    </table>

                    </div>

                </div>
            </div>
        </div>
    </div>
    </>
  );
}           

tableList.getLayout = function getLayout(page) {
    return (
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
    )
}