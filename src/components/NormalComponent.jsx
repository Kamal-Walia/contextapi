import {Component} from "react";

class NormalComponent extends Component{

    shouldComponentUpdate(nextProps){
        if(this.props.userName.length === nextProps.userName.length){
            return false
        }
        return true
    }

    render(){
        console.log('In Normal Component')
        return(
            <div>
                Hello {this.props.userName}
            </div>
        )
    }
}

export default NormalComponent