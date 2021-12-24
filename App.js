import { render } from "@testing-library/react";
import { ReactDOM } from "react-dom";


function App(){
    return(
        render(
            <h1>
                This is a hello component 
            </h1>
        )
    )
}

export default App;