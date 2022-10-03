import { useContext } from "react";
import MyContext from "./context/Context";

const UseContextHook = () => {
    const context = useContext(MyContext);
    console.log('KW101',context )
    return(
        <div>
            <p>
               Hello From Functional Component {context.userName} 
            </p>
        </div>
    )

}

export default UseContextHook;