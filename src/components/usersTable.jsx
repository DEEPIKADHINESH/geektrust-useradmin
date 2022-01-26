import React, { Component } from "react";
import Select from "../common/select";
class UsersTable extends Component{
    render(){
        const{onDelete,onSelect,users}=this.props
        return(
            <div>
                  <table className="table">
            <thead>
            <tr style={{color:"blue"}}>
                <th></th>
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody> 
        {users.map(users=>(<tr key={users.id}>
             <td><Select onClick={()=>onSelect(users)}
            liked= {users.liked}/>
             </td>   
                  <td>{users.name}</td>
                  <td>{users.role}</td>
                  <td>{users.email}</td>
                <td><i onClick={()=>onDelete(users)} style={{color:"red"}}
                className="fa fa-trash-o" aria-hidden="true"></i></td>  
                  </tr>))}
               </tbody>
               </table>
               </div>
        )
    }
}
export default UsersTable;