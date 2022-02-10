import React,{Component} from "react";
import Pagination from "../common/pagination";
import { paginate } from "./paginate";
import Searchbox from "../common/searchBox";
import UsersTable from "./usersTable";
import httpService from "../service/httpService";
import config from "../config.json";
import {getUser} from "../service/userService"
class User extends Component{
    state={
       user:[],
       currentPage:1,
       pageSize:10,
       searchQuery:"",
       
    }
   async componentDidMount(){
    try{
        const{data:user}=await httpService.get(config.apiUrl)
         this.setState({user})
    } 
        //   const userId=this.props.match.params.id;
        //   const {data:user}=await getUser(userId)
        //  this.setState({data:this.mapToViewModel(user)})
    
    catch(ex){
        if( ex.response&&ex.response.status===404)
        console.log("error  occured")
}
   }
    // mapToViewModel(userId){
    //     return{
    //         id:userId.id,
    //         name:userId.name,
    //         role:userId.role,
    //         email:userId.email
    //     }
    // }
    handlePageChange=(page)=>{
        this.setState({currentPage:page})
    }
    handleSearch=(query)=>{
        //console.log(query)
        this.setState({searchQuery:query,currentPage:1})
    }
    handleDelete=(users)=>{
        const user= this.state.user.filter(m=>m.id !== users.id)
        this.setState({user})
    }
    handleSelect=(users)=>{
        const user=[...this.state.user]
        const index=user.indexOf(users);
        user[index]={...user[index]}
        user[index].liked =!user[index].liked;
        this.setState({user:user})
    }
    handleDeleted=(users)=>{
const user=this.state.user.filter(e=>!users.includes(e))
this.setState({user})
    }
    
    handleEdit=()=>{
        console.log("Edit enabled")
        this.setState({edit:true})
    }
   getPagedData=()=>{
        let filtered=this.state.user
        if(this.state.searchQuery)
        filtered=this.state.user.filter(item=>
        {return (item.role||item.email).toLowerCase().startsWith(this.state.searchQuery.toLowerCase())})
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
             onhandleEdit={this.handleEdit}
             onDelete={this.handleDelete}
             onSelect={this.handleSelect}
             />
            
             <div className="row">
                 <div className="col-2">
                     <button onClick={()=>this.handleDeleted(user)}className="btn btn-danger" >Delete users</button>
                      </div>
<div className="col">
             <Pagination itemsCount={this.state.user.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={this.handlePageChange}
       onDelete={this.handleDelete}
        />
             </div>
        </div></div>
        )
      
    }
}
export default User;