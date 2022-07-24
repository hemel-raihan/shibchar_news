import Link from "next/link";


export default function ChildCategories({item, child, i}) {
  

  return (
    <>
     <ul className="transfer-double-group-list-li-ul transfer-double-group-list-li-ul-16368784927512">
        <li className="transfer-double-group-list-li-ul-li transfer-double-group-list-li-ul-li-16368784927512">
          <div className="checkbox-group">
                <input type="checkbox" name="parent_id" value={child._id}  class="checkbox-normal group-checkbox-item-1636878492751 belongs-group-0-1636878492751" id={`group_${item._id}_checkbox_${i}_1636878492751`} />
                <label for={`group_${item._id}_checkbox_${i}_1636878492751`} class="group-checkbox-name-1636878492751">{child.name}</label>
          </div>
          {/* @if($category->childrenRecursive->count()>0)
        @include('backend.admin.blog.category.child_categories', ['sub_category' => $sub])
        @endif */}
        </li>
    </ul>
    </>
  );
}
