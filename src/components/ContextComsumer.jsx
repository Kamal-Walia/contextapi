import React from "react";
import MyContext from "./context/Context";

class ContextConsumer extends React.Component{
    static contextType = MyContext;

    componentDidUpdate() {
        console.log('KW102', this.context)
    }
    render() {
        return(
            <MyContext.Consumer>
                {
                    (context) => {
                        return(
                            <div>Hello {context.userName}
                            {
                                context.aliases.map((item, index) => <p key={index}>{item}</p>)
                            }
                            
                            </div>
                        )
                    }
                }
            </MyContext.Consumer>
        )
    }
}

export default ContextConsumer


