import React,{Component} from "react";
class Select extends  Component{
    render(){
        // let  classes="fa fa-check-square"
        // if(!this.props.liked) classes="fa fa-square"
       let classes="fa fa-check-square"
       if(!this.props.liked) classes+="fa fa-square-o"
            return(
                <i onClick={this.props.onClick}
                className={classes}
                aria-hidden="true"/>
        )
    }
}
export default Select