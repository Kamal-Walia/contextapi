import React from "react";
import MyContext from "./context/Context";
import ContextConsumer from "./ContextComsumer";
import UseContextHook from "./UseContextHook";

class ContextClass extends React.Component{
    constructor(){
        super();
        this.state ={
            userName: ''
        }
    }

    handleUpdateUserName = (e) => {
        this.setState({userName: e.target.value})
    }
    
    render(){
        return(
            <MyContext.Provider value={{userName:this.state.userName, aliases: ['KW', 'Kamal', 'Walia']}}>
                <input type="text" value={this.state.userName} onChange={this.handleUpdateUserName} />
            <ContextConsumer />
            <UseContextHook />
            </MyContext.Provider>
        )
    }
   
}

export default ContextClass;
