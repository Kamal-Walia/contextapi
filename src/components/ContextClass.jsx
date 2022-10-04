import React from "react";
import MyContext from "./context/Context";
import ContextConsumer from "./ContextComsumer";
import NormalComponent from "./NormalComponent";
import PureComponent from "./PureComponentClass";
import UseContextHook from "./UseContextHook";

class ContextClass extends React.Component{
    constructor(){
        super();
        this.state ={
            userName: '',
            lastName: ''
        }
    }

    handleUpdateUserName = (e) => {
        this.setState({userName: e.target.value})
    }
    handleUpdateLastName = (e) => {
        this.setState({lastName: e.target.value})
    }

    
    render(){
        return(
            <MyContext.Provider value={{userName:this.state.userName, aliases: ['KW', 'Kamal', 'Walia']}}>
                User Name: <input type="text" value={this.state.userName} onChange={this.handleUpdateUserName} /><br/>
                Last Name:<input type="text" value={this.state.lastName} onChange={this.handleUpdateLastName} />
            <ContextConsumer />
            <UseContextHook />
            <NormalComponent userName={this.state.userName}/>
            <PureComponent userName={this.state.userName}/>
            </MyContext.Provider>
        )
    }
   
}

export default ContextClass;
