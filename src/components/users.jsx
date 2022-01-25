import React,{Component} from "react";
import {getUser} from "../fakeUser";
import Pagination from "../common/pagination";
import { paginate } from "./paginate";
class User extends Component{
    state={
       user:getUser(),
       currentPage:1,
       pageSize:7
    }
    handlePageChange=(page)=>{
        this.setState({currentPage:page})
    }
    getPagedData=()=>{
        const users=paginate(this.state.user,this.state.currentPage,this.state.pageSize)
        return{users}
    }
    
    render(){
       const {users}=this.getPagedData()
        return(
            <div>
            <table className="table">
                <thead>
                    <tr style={{color:"blue"}}>
                        <th>id</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody> 
                    {users.map(users=>(<tr key={users.id}>
                          <td>{users.id}</td>
                          <td>{users.name}</td>
                          <td>{users.role}</td>
                          <td>{users.email}</td>
                          </tr>))}
                       </tbody>
            </table>
              <Pagination itemsCount={this.state.user.length}
        currentPage={this.state.currentPage}
        pageSize={this.state.pageSize}
        onPageChange={this.handlePageChange}
        />
        </div>
        )
      
    }
}
export default User;