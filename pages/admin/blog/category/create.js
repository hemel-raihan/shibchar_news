import Link from "next/link";


export default function Create() {
  

  return (
    <>
     <div className="page-header">
        <div>
            <h1 className="page-title">Create Categories</h1>
          
        </div>
        <div className="ms-auto pageheader-btn">
            <Link href="{{route('admin.categories.index')}}">
            <a  className="btn btn-primary btn-icon text-white me-2">Back To CategoryList</a>
            </Link>
            
        </div>
    </div>

    <form enctype="multipart/form-data">
	<div className="row">
		<div className="col-lg-9 col-xl-9 col-md-12 col-sm-12">
			<div className="card">
				<div className="card-header">
					<h3 className="card-title">Create Blog Category</h3>
				</div>
				<div className="card-body">

                   
					<div className="form-group">
						<label for="exampleInputname">Category Name</label>
						<input type="text" className="form-control " value="" name="name" id="exampleInputname" placeholder="Category Name" />
                      
					</div>

					<div className="form-group">
						<label for="exampleInputContent">Category Description</label>
						<div className="ql-wrapper ql-wrapper-demo bg-light">
							
                            <textarea style={{height: '200px'}} className="form-control" id="" name="desc"></textarea>
						</div>
					</div>

				</div>
				<div className="card-footer text-end">
					<button type="submit" className="btn btn-success mt-1">
                        Create
                    </button>
					<a href="{{route('admin.categories.index')}}" className="btn btn-danger mt-1">Cancel</a>
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

                                            {/* @foreach($categories as $key => $category)
												<li className="transfer-double-group-list-li transfer-double-group-list-li-1636878492751">
													<div className="checkbox-group">
														<input type="checkbox" name="parent_id" value="{{$category->id}}" className="checkbox-normal group-select-all-1636878492751" id="group_{{$key}}_1636878492751" /><label for="group_{{$key}}_1636878492751" className="group-name-1636878492751">{{$category->name}}</label>
													</div>
                                                    @if($category->childrenRecursive->count()>0)
													  @include('backend.admin.blog.category.child_categories', ['sub_category' => $category])
                                                    @endif
												</li>
                                            @endforeach */}

                                                <li className="transfer-double-group-list-li transfer-double-group-list-li-1636878492751">
													<div className="checkbox-group">
														<input type="checkbox" name="parent_id" value="1" className="checkbox-normal group-select-all-1636878492751" id="group_1_1636878492751" /><label for="group_1_1636878492751" className="group-name-1636878492751">test</label>
													</div>
                                                    <ul className="transfer-double-group-list-li-ul transfer-double-group-list-li-ul-16368784927512">
                                                        <li className="transfer-double-group-list-li-ul-li transfer-double-group-list-li-ul-li-16368784927512">
                                                        <div className="checkbox-group">
                                                                <input type="checkbox" name="parent_id" value="1"  className="checkbox-normal group-checkbox-item-16368784927512 belongs-group-2-1636878492751" id="group_2_checkbox_1_16368784927512" />
                                                                <label for="group_2_checkbox_1_16368784927512" className="group-checkbox-name-16368784927512">hemel</label>
                                                            </div>
                                                        </li>
                                                    </ul>
												</li>

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

                    <div className="form-group">
						<div className="form-label">Status</div>
						<label className="custom-switch">
							<input type="checkbox" name="status" className="custom-switch-input " />
							<span className="custom-switch-indicator"></span>
						</label>
					</div>


                    <div className="form-group">
						<label className="form-label">Category Image</label>
                        <input type="file" className="dropify form-control @error('image') is-invalid @enderror" data-default-file="{{ isset($category) ? asset('uploads/category/'.$category->image) : '' }}" name="image" />
					</div>
				</div>
			</div>
		</div>
	</div>
    </form>
    </>
  );
}
