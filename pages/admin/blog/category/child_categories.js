import Link from "next/link";
import { useState, useEffect } from 'react';
import useFetch from '../../../../hooks/useFetch';

export default function ChildCategories({item,subCat}) {

  const {data, loading, error} = useFetch(`http://localhost:5000/api/blog/categories/${item._id}`)
console.log(item)
  return (
    <>
    {item?.childs?.map((child, i)=>(
        <ul className="transfer-double-group-list-li-ul transfer-double-group-list-li-ul-16368784927512">
          <li className="transfer-double-group-list-li-ul-li transfer-double-group-list-li-ul-li-16368784927512">
            <div className="checkbox-group">
                  <input type="checkbox" name="parent_id" value={child._id} onChange={(e)=>subCat(e.target.value)} class="checkbox-normal group-checkbox-item-1636878492751 belongs-group-0-1636878492751" id={`group_${item._id}_checkbox_${i}_1636878492751`} />
                  <label htmlFor={`group_${item._id}_checkbox_${i}_1636878492751`} class="group-checkbox-name-1636878492751">{child.name}</label>
            </div>
            
            {child?.childs?.length != 0 && (
                <ChildCategories item={child} subCat={subCat}/>
            )}
          </li>
        </ul>
      ))}
      
      

     {/* <ul className="transfer-double-group-list-li-ul transfer-double-group-list-li-ul-16368784927512">
        <li className="transfer-double-group-list-li-ul-li transfer-double-group-list-li-ul-li-16368784927512">
          <div className="checkbox-group">
                <input type="checkbox" name="parent_id" value={child._id} onChange={(e)=>setChildId(e.target.value)} class="checkbox-normal group-checkbox-item-1636878492751 belongs-group-0-1636878492751" id={`group_${item._id}_checkbox_${i}_1636878492751`} />
                <label htmlFor={`group_${item._id}_checkbox_${i}_1636878492751`} class="group-checkbox-name-1636878492751">{child.name}</label>
          </div>
          {child?.childs.map((sub, i)=>(
            <ChildCategories child={sub} item={item} i={i}/>
          ))}
        </li>
    </ul> */}
    </>
  );
}
