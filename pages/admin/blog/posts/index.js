import React,{ useState, useEffect } from "react";
import Link  from 'next/link';
//import moment from 'moment';
import toast from "../../../../components/admin/Toast/index";
import useFetch from './../../../../hooks/useFetch';
import Layout from "../../../../components/admin/Layout"
import Axios from '../../../../hooks/axios';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagination from "react-js-pagination";
import axios from 'axios';

export default function TableList() {

  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);

  const [data, setData] = useState("");
  const [formError, setError] = useState("");

  const {http} = Axios();

  //const {data, loading, error, reFetch} = useFetch(`${process.env.NEXT_PUBLIC_DOMAIN}/blog/categories?page=${pageNumber}`)

  const fetchData = async (pageNumber = 1) => {
    
    const res = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/blog/posts?page=${pageNumber}`);
    setData(res.data);
};

useEffect(() => {
    fetchData();
}, [])

 async function deletePost(id, parentId)
 {
//   setLoading(true);
  await http.delete(`${process.env.NEXT_PUBLIC_DOMAIN}/blog/posts/${id}/${parentId}`)
    .then((res)=>{
      notify("success", "successfully has been deleted!");
    //   setLoading(false);
    }).catch((e)=>{
        setError(e.response.data.message)
    });
    fetchData()
    //reFetch()
 }

//   if (loading)
//     return (
//       <>
//         <div id="global-loader">
// 			<img src="/assets/images/loader.svg" className="loader-img" alt="Loader" />
// 		</div>
//       </>
//     );

  return (
    <>
      {/* <HeadSection title="All-Leave-Categories" /> */}

            <div className="page-header">
                <div>
                    <h1 className="page-title">Blog Management</h1>
                </div>

                <div className="ms-auto pageheader-btn">
                    <Link href="posts/create">
                        <a className="btn btn-primary btn-icon text-white me-2">
                            <span>
                                <i className="fe fe-plus"></i>
                            </span> Create New Post
                        </a>
                    </Link>
                    
                </div>
            </div>

    <div className="row row-sm">
        <div className="col-lg-12">
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">All Posts</h3>
                </div>
                {formError && (
					<div className="card-header">
						<h3 style={{color: 'red'}} className="card-title">{formError}</h3>
					</div>
				)}
            <div className="card-body">
                <div className="table-responsive export-table">
                    <table id="file-datatable" className="table table-bordered text-nowrap key-buttons border-bottom  w-100">
                        <thead>
                            <tr>
                                <th className="border-bottom-0">Title</th>
                                <th className="border-bottom-0">Category</th>
                                <th className="border-bottom-0">Feature Image</th>
                                <th className="border-bottom-0">Action</th>

                            </tr>
                        </thead>
                        <tbody>
                        {data?.data &&
                        data?.data.map((post, index) => (
                            <tr key={index}>
                                <td>{post.title}</td>
                                <td>{post.category.name}</td>
                                <td>{post.photo && <img width="100px" src={post.photo} alt="" />}</td>

                                <td>
                                    <Link href={`category/edit/${post._id}`}>
                                        <a className="btn btn-success">
                                          <i className="fa fa-edit"></i>
                                        </a>
                                    </Link>
                                    

                                    <button className="btn btn-danger waves effect" type="button"
                                         onClick={() => deletePost(post._id, post?.categoryId || 0)}  >
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </td>

                            </tr>
                            ))}
                        </tbody>
                    </table>

                    <div>
                        <Pagination
                            activePage={data?.currentPage ? data?.currentPage : 0}
                            itemsCountPerPage={data?.perPage ? data?.perPage : 0 }
                            totalItemsCount={data?.total ? data?.total : 0}
                            onChange={(pageNumber) => {
                                fetchData(pageNumber)
                            }}
                            pageRangeDisplayed={8}
                            itemClass="page-item"
                            linkClass="page-link"
                            firstPageText="First Page"
                            lastPageText="Last Lage"
                        />
                    </div>

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