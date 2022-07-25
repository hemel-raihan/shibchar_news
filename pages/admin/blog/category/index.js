import React,{ useState } from "react";
import Link  from 'next/link';
//import moment from 'moment';
import toast from "../../../../components/Toast/index";
import useFetch from './../../../../hooks/useFetch';

export default function tableList() {

  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);

  const {data, loading, error} = useFetch("http://localhost:5000/api/blog/categories")

//  async function deleteLeave(id)
//  {
//   setLoading(true);
//   await http.post(`${process.env.NEXT_PUBLIC_DOMAIN}/app/hrm/leaves`,{action: "deleteLeaveCategory", leave_id: id})
//     .then((res)=>{
//       notify("success", "successfully has been deleted!");
//       setLoading(false);
//     });
//     leaveList()
//  }

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
                                    <a href="{{route('admin.categories.edit',$category->id)}}" className="btn btn-success">
                                    <i className="fa fa-edit"></i>
                                    </a>

                                    <button className="btn btn-danger waves effect" type="button"
                                        onClick="deletepost$category({{ $category->id}})" >
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