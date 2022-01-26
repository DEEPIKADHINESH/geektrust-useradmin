import React from "react";
import _ from "lodash"
function Pagination(props){
 const{itemsCount,pageSize,currentPage}=props
    const pageCount=Math.ceil(itemsCount/pageSize)
    if (pageCount===1) return null;
    const pages=_.range(1,pageCount+1)
    return(
    <nav>
        <ul className="pagination">
          {pages.map(page=><li key={page} style={{cursor:"pointer"}}
          className={page===currentPage ? "page-item active":"page-item"}>
          <a className="page-link" onClick={()=>props.onPageChange(page)}>{page}</a></li>)}
        </ul>
    </nav>
    )
    
}
export default Pagination