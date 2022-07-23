import Link from "next/link";


export default function Create() {
  

  return (
    <>
    <div class="page-header">
        <div>
            <h1 class="page-title">Create Categories</h1>
          
        </div>
        <div class="ms-auto pageheader-btn">
            <Link href="{{route('admin.categories.index')}}">
            <a  class="btn btn-primary btn-icon text-white me-2">Back To CategoryList</a>
            </Link>
            
        </div>
    </div>

    <form enctype="multipart/form-data">
	<div class="row">
		<div class="col-lg-9 col-xl-9 col-md-12 col-sm-12">
			<div class="card">
				<div class="card-header">
					<h3 class="card-title">Create Blog Category</h3>
				</div>
				<div class="card-body">

                   
					<div class="form-group">
						<label for="exampleInputname">Category Name</label>
						<input type="text" class="form-control " value="" name="name" id="exampleInputname" placeholder="Category Name" />
                      
					</div>

					<div class="form-group">
						<label for="exampleInputContent">Category Description</label>
						<div class="ql-wrapper ql-wrapper-demo bg-light">
							
                            <textarea style={{height: '200px'}} class="form-control" id="" name="desc"></textarea>
						</div>
					</div>

				</div>
				<div class="card-footer text-end">
					<button type="submit" class="btn btn-success mt-1">
                        Create
                    </button>
					<a href="{{route('admin.categories.index')}}" class="btn btn-danger mt-1">Cancel</a>
				</div>
			</div>
		</div>

		{/* {{-- Right Side --}} */}
		<div class="col-lg-3 col-xl-3 col-md-12 col-sm-12" style={{float: 'left'}}>

			<div class="card shadow-none border">
				<div class="card-header">
					<h5 class="card-title">Parent Category</h5>
				</div>
				<div class="card-body" style={{padding: '2px'}}>
					<div class="transfer">
						<div class="transfer-double" id="transfer_double_languageInput">
							<div class="transfer-double-header"></div>
							<div class="transfer-double-content clearfix">

								<div class="transfer-double-list transfer-double-list-1636878492751 tab-content-first-1636878492751 tab-content-active">
								


									<div class="transfer-double-list-content">
										<div class="transfer-double-list-main">

											<ul class="transfer-double-group-list-ul transfer-double-group-list-ul-1636878492751">

                                            {/* @foreach($categories as $key => $category)

												<li class="transfer-double-group-list-li transfer-double-group-list-li-1636878492751">
													<div class="checkbox-group">
														<input type="checkbox" name="parent_id" value="{{$category->id}}" class="checkbox-normal group-select-all-1636878492751" id="group_{{$key}}_1636878492751" /><label for="group_{{$key}}_1636878492751" class="group-name-1636878492751">{{$category->name}}</label>
													</div>
                                                    @if($category->childrenRecursive->count()>0)


													  @include('backend.admin.blog.category.child_categories', ['sub_category' => $category])


                                                    @endif


												</li>
                                            @endforeach */}

                                                <li class="transfer-double-group-list-li transfer-double-group-list-li-1636878492751">
													<div class="checkbox-group">
														<input type="checkbox" name="parent_id" value="1" class="checkbox-normal group-select-all-1636878492751" id="group_1_1636878492751" /><label for="group_1_1636878492751" class="group-name-1636878492751">test</label>
													</div>
                                                    <ul class="transfer-double-group-list-li-ul transfer-double-group-list-li-ul-16368784927512">
                                                        <li class="transfer-double-group-list-li-ul-li transfer-double-group-list-li-ul-li-16368784927512">
                                                        <div class="checkbox-group">
                                                                <input type="checkbox" name="parent_id" value="1"  class="checkbox-normal group-checkbox-item-16368784927512 belongs-group-2-1636878492751" id="group_2_checkbox_1_16368784927512" />
                                                                <label for="group_2_checkbox_1_16368784927512" class="group-checkbox-name-16368784927512">hemel</label>
                                                            </div>
                                                        </li>
                                                    </ul>
												</li>

											</ul>
										</div>
									</div>

								</div>

							</div>
							<div class="transfer-double-footer"></div>
						</div>
					</div>
				</div>

			</div>

			<div class="card">
				<div class="card-header">
					<h3 class="card-title">Create Page</h3>
				</div>
				<div class="card-body">

                    <div class="form-group">
						<div class="form-label">Status</div>
						<label class="custom-switch">
							<input type="checkbox" name="status" class="custom-switch-input " />
							<span class="custom-switch-indicator"></span>
						</label>
					</div>


                    <div class="form-group">
						<label class="form-label">Category Image</label>
                        <input type="file" class="dropify form-control @error('image') is-invalid @enderror" data-default-file="{{ isset($category) ? asset('uploads/category/'.$category->image) : '' }}" name="image" />
					</div>
				</div>
			</div>
		</div>
	</div>
    </form>
    </>
  );
}
