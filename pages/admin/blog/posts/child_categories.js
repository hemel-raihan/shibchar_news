

export default function ChildCategories({item,subCat}) {
  return (
    <>
    {item?.childs?.map((child, i)=>(
        <ul key={i} className="transfer-double-group-list-li-ul transfer-double-group-list-li-ul-16368784927512">
          <li className="transfer-double-group-list-li-ul-li transfer-double-group-list-li-ul-li-16368784927512">
            <div className="checkbox-group">
                  <input type="checkbox" name="parent_id" value={child._id} onChange={(e)=>subCat(e.target.value)} className="checkbox-normal group-checkbox-item-1636878492751 belongs-group-0-1636878492751" id={`group_${item._id}_checkbox_${i}_1636878492751`} />
                  <label htmlFor={`group_${item._id}_checkbox_${i}_1636878492751`} className="group-checkbox-name-1636878492751">{child.name}</label>
            </div>
            {child?.childs?.length != 0 && (
                <ChildCategories item={child} subCat={subCat}/>
            )}
           
          </li>
        </ul>
      ))}
    </>
  );
}
