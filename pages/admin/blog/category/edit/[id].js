import React,{ useState, useEffect } from "react";
import Link from "next/link";
import useFetch from '../../../../../hooks/useFetch';
import EditChildCategories from './edit_child_categories';
import Axios from '../../../../../hooks/axios';
import { useRouter } from 'next/router';
import toast from "../../../../../components/admin/Toast/index";
import Layout from "../../../../../components/admin/Layout"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

export default function Update() {
	const notify = React.useCallback((type, message) => {
		toast({ type, message });
	  }, []);

    // const [details, setDetails] = useState([]);
     const [categoryChild, setCategorychild] = useState([]);


	const {http} = Axios();
	const router = useRouter();
	const { id } = router.query;

	const [formError, setError] = useState("");

	const [name, setName] = useState("");
    const [desc, setDesc] = useState(""); 
    const [parentId, setparentId] = useState();
	const [oldParentId, setOldparentId] = useState();
	const [file, setFile] = useState("");
	const [image, setImage] = useState("");

	const subCat = (subItem) =>{
		setparentId(subItem);
	}


	useEffect(() =>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/blog/categories/child`)
                setCategorychild(res.data)
            }
            catch(err){
            }
        }
		const fetchDetails = async ()=>{
            try{
                const res = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/blog/categories/${id}`)
                setName(res.data.name)
				setDesc(res.data.desc)
				setparentId(res.data.parentId)
				setOldparentId(res.data.parentId)
				setImage(res.data.photo)
            }
            catch(err){
            }
        }
        fetchData()
		router.isReady && fetchDetails()
    },[id])

	async function submitForm(e) {
		e.preventDefault();
		if (file) {
			const formData =new FormData();
			const filename = Date.now() + file.name;
			formData.append("imageName", filename);
			formData.append("name", name);
			formData.append("file", file);
			if(parentId){
				formData.append("parentId", parentId);
			}
			formData.append("desc", desc);

			await http.put(`${process.env.NEXT_PUBLIC_DOMAIN}/blog/categories/update/${id}/${oldParentId}`,formData)
			.then((res)=>{
			notify("success", "successfully Added!");
				console.log(res.data);
			router.push('/admin/blog/category');
			}).catch((e)=>{
				//setError(e.response.data.message)
			});
		  }
		  else{
			await http.put(`${process.env.NEXT_PUBLIC_DOMAIN}/blog/categories/update/${id}/${oldParentId}`,{name, desc, parentId})
			.then((res)=>{
			notify("success", "successfully Added!");
				console.log(res.data);
			router.push('/admin/blog/category');
			}).catch((e)=>{
				//setError(e.response.data.message)
			});
		  }
	   }

  return (
    <>
     <div className="page-header">
        <div>
            <h1 className="page-title">Update Category</h1>
          
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
					<h3 className="card-title">Update Blog Category</h3>
				</div>
				{formError && (
					<div className="card-header">
						<h3 style={{color: 'red'}} className="card-title">{formError}</h3>
					</div>
				)}
				<div className="card-body">

					<div className="form-group">
						<label htmlFor="exampleInputname">Category Name</label>
						<input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} value={name} id="exampleInputname" placeholder="Category Name" />
                      
					</div>

					<div className="form-group">
						<label htmlFor="exampleInputContent">Category Description</label>
						<div className="ql-wrapper ql-wrapper-demo bg-light">
                            <textarea style={{height: '200px'}} value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="" name="desc"></textarea>
						</div>
					</div>

				</div>
				<div className="card-footer text-end">
					<button type="submit" className="btn btn-success mt-1">
                        Update
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

												{categoryChild.map((item, index)=>(
                                                <li key={index} className="transfer-double-group-list-li transfer-double-group-list-li-1636878492751">
													<div className="checkbox-group">
														<input type="checkbox" onChange={(e)=>setparentId(e.target.value)} value={item._id} checked={item._id == parentId ? true : false} className="checkbox-normal group-select-all-1636878492751" id={`group_${index}_1636878492751`} /><label htmlFor={`group_${index}_1636878492751`} className="group-name-1636878492751">{item.name}</label>
													</div>
													
													{/* {item.childs.map((child, i)=>(
														<ChildCategories child={child} item={item} i={i}/>
													))} */}

														{item?.childs?.length != 0 && (
														<EditChildCategories item={item} subCat={subCat} parentId={parentId}/>
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
                        <input type="file"  onChange={(e) => setFile(e.target.files[0])} className=" form-control"  name="image" />
						{image && <img  src={image} alt="" />}
					</div>
				</div>
			</div>
		</div>
	</div>
    </form>
    </>
  );
}

Update.getLayout = function getLayout(page) {
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