import {PureComponent} from "react";

class PureComponentClass extends PureComponent{
    render(){
        console.log('In Pure Component')
        return(
            <div>
                Hello {this.props.userName}
            </div>
        )
    }
}

export default PureComponentClass