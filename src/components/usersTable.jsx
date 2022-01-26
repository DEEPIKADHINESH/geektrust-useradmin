import React, { Component } from "react";
import Select from "../common/select";
class UsersTable extends Component{
    render(){
        return(
            <div>
                  <table className="table">
            <thead>
            <tr style={{color:"blue"}}>
                <th></th>
                <th>id</th>
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody> 
        {this.props.users.map(users=>(<tr key={users.id}>
             <td><Select onClick={()=>this.props.onSelect(users)}
            liked= {users.liked}/>
             </td>   
                  <td>{users.id}</td>
                  <td>{users.name}</td>
                  <td>{users.role}</td>
                  <td>{users.email}</td>
                <td><i onClick={()=>this.props.onDelete(users)} style={{color:"red"}}
                className="fa fa-trash-o" aria-hidden="true"></i></td>  
                  </tr>))}
               </tbody>
               </table>
               </div>
        )
    }
}
export default UsersTable;