import React from "react";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
import Tour from "./Tour";

function Merged(){
    return(
        <>
            <PageHeader/>
            <Tour/>
            <PageFooter/>
        </>

    )
}

export default Merged;