import React,{Component} from "react";
import {getUser} from "../fakeUser";
import Pagination from "../common/pagination";
import { paginate } from "./paginate";
import Searchbox from "../common/searchBox";
import UsersTable from "./usersTable";
class User extends Component{
    state={
       user:getUser(),
       currentPage:1,
       pageSize:10,
       searchQuery:""
    }
    handlePageChange=(page)=>{
        this.setState({currentPage:page})
    }
    handleSearch=(query)=>{
        //console.log(query)
        this.setState({searchQuery:query,currentPage:1})
    }
    handleDelete=(users)=>{
        const user=this.state.user.filter(m=>m.id !== users.id)
        this.setState({user})
    }
    handleSelect=(users)=>{
        const user=[...this.state.user]
        const index=user.indexOf(users);
        user[index]={...user[index]}
        user[index].liked =!user[index].liked;
        this.setState({user:user})
    }
    getPagedData=()=>{
        let filtered=this.state.user
        if(this.state.searchQuery)
        filtered=this.state.user.filter(item=>
        {return (item.email||item.name||item.role).toLowerCase().startsWith(this.state.searchQuery.toLowerCase())})
        const user=paginate(filtered,this.state.currentPage,this.state.pageSize)
        return{user}
    }
    render(){
       const {user}=this.getPagedData()
       const {currentPage,pageSize,searchQuery}=this.state;
        return(
      <div>
            <Searchbox value={searchQuery} 
            onChange={this.handleSearch}/>
             <UsersTable users={user}
             onDelete={this.handleDelete}
             onSelect={this.handleSelect}/>
           <Pagination itemsCount={this.state.user.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={this.handlePageChange}
        />
        </div>
        )
      
    }
}
export default User;