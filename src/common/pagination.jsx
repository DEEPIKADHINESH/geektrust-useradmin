import React from "react";
import _ from "lodash"
function Pagination(props){
 const{itemsCount,pageSize,currentPage,onPageChange}=props
    const pageCount=Math.ceil(itemsCount/pageSize)
    if (pageCount===1) return null;
    const pages=_.range(1,pageCount+1)
    return(
      <div>
      <nav>
       <ul className="pagination">
        {pages.map(page=><li key={page} style={{cursor:"pointer"}}
          className={page===currentPage ? "page-item active":"page-item"}>
          <button className="page-link"  onClick={()=>onPageChange(page)}>{page}</button></li>)}
         </ul>
    </nav>
   
    </div>
    )
    
}
export default Pagination