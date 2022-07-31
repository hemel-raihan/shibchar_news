import React,{ useState, useEffect } from "react";
import Link from "next/link";
import useFetch from '../../../../hooks/useFetch';
import ChildCategories from './child_categories';
import Axios from '../../../../hooks/axios';
import { useRouter } from 'next/router';
import toast from "../../../../components/admin/Toast/index";
import Layout from "../../../../components/admin/Layout"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Create() {
	const notify = React.useCallback((type, message) => {
		toast({ type, message });
	  }, []);
  
	const {data, loading, error} = useFetch("http://localhost:5000/api/blog/categories/child")

	const {http} = Axios();
	const router = useRouter();

	const [formError, setError] = useState("");

	const [name, setName] = useState("");
	var slug = name.replace(/\s+/g, '-').toLowerCase();
    const [desc, setDesc] = useState(""); 
    const [parentId, setparentId] = useState();
	const [file, setFile] = useState("");

	const subCat = (subItem) =>{
		setparentId(subItem);
	}

	async function submitForm(e) {
		e.preventDefault();
		if (file) {
			const formData =new FormData();
			const filename = Date.now() + file.name;
			formData.append("name", name);
			formData.append("slug", slug);
			formData.append("file", file);
			if(parentId){
				formData.append("parentId", parentId);
			}
			formData.append("desc", desc);

			await http.post(`${process.env.NEXT_PUBLIC_DOMAIN}/blog/categories/create`,formData)
			.then((res)=>{
			notify("success", "successfully Added!");
				console.log(res.data);
			router.push('/admin/blog/category');
			}).catch((e)=>{
				setError(e.response.data.message)
			});
		  }
		  else{
			await http.post(`${process.env.NEXT_PUBLIC_DOMAIN}/blog/categories`,{name, slug, desc, parentId})
			.then((res)=>{
			notify("success", "successfully Added!");
				console.log(res.data);
			router.push('/admin/blog/category');
			}).catch((e)=>{
				setError(e.response.data.message)
			});
		  }
	   }

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

    <form onSubmit={submitForm}>
	<div className="row">
		<div className="col-lg-9 col-xl-9 col-md-12 col-sm-12">
			<div className="card">
				<div className="card-header">
					<h3 className="card-title">Create Blog Category</h3>
				</div>
				{formError && (
					<div className="card-header">
						<h3 style={{color: 'red'}} className="card-title">{formError}</h3>
					</div>
				)}
				<div className="card-body">

					<div className="form-group">
						<label htmlFor="exampleInputname">Category Name</label>
						<input type="text" className="form-control" onChange={(e)=>setName(e.target.value)}  id="exampleInputname" placeholder="Category Name" />
					</div>

					<div className="form-group">
						<label htmlFor="exampleInputContent">Category Description</label>
						<div className="ql-wrapper ql-wrapper-demo bg-light">
                            <textarea style={{height: '200px'}} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="" name="desc"></textarea>
						</div>
					</div>

				</div>
				<div className="card-footer text-end">
					<button type="submit" className="btn btn-success mt-1">
                        Create
                    </button>
				</div>
			</div>
		</div>

		{/* {{-- Right Side --}} */}
		<div className="col-lg-3 col-xl-3 col-md-12 col-sm-12" style={{float: 'left'}}>

			<div className="card shadow-none border">
				<div className="card-header">
					<h5 className="card-title">Parent Category</h5>
				</div>
				<div className="card-body" style={{padding: '2px'}}>
					<div className="transfer">
						<div className="transfer-double" id="transfer_double_languageInput">
							<div className="transfer-double-header"></div>
							<div className="transfer-double-content clearfix">

								<div className="transfer-double-list transfer-double-list-1636878492751 tab-content-first-1636878492751 tab-content-active">
								


									<div className="transfer-double-list-content">
										<div className="transfer-double-list-main">

											<ul className="transfer-double-group-list-ul transfer-double-group-list-ul-1636878492751">

												{data.map((item, index)=>(
                                                <li key={index} className="transfer-double-group-list-li transfer-double-group-list-li-1636878492751">
													<div className="checkbox-group">
														<input type="checkbox" onChange={(e)=>setparentId(e.target.value)} value={item._id} className="checkbox-normal group-select-all-1636878492751" id={`group_${index}_1636878492751`} /><label htmlFor={`group_${index}_1636878492751`} className="group-name-1636878492751">{item.name}</label>
													</div>
													
													{/* {item.childs.map((child, i)=>(
														<ChildCategories child={child} item={item} i={i}/>
													))} */}

														{item?.childs?.length != 0 && (
														<ChildCategories item={item} subCat={subCat}/>
														)}
						
												</li>
												))}

											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="transfer-double-footer"></div>
						</div>
					</div>
				</div>

			</div>

			<div className="card">
				<div className="card-header">
					<h3 className="card-title">Create Page</h3>
				</div>
				<div className="card-body">

                    {/* <div className="form-group">
						<div className="form-label">Status</div>
						<label className="custom-switch">
							<input type="checkbox" name="status" className="custom-switch-input " />
							<span className="custom-switch-indicator"></span>
						</label>
					</div> */}


                    <div className="form-group">
						<label className="form-label">Category Image</label>
                        <input type="file"  onChange={(e) => setFile(e.target.files[0])} className="dropify form-control" data-default-file="{{ isset($category) ? asset('uploads/category/'.$category->image) : '' }}" name="image" />
					</div>
				</div>
			</div>
		</div>
	</div>
    </form>
    </>
  );
}

Create.getLayout = function getLayout(page) {
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