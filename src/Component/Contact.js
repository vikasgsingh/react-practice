import React from "react";
import { useParams } from "react-router-dom";
const Contact = () => {
    let {category, id}=useParams()
    return (
        <>
        <h2>this is contact page</h2>
        <h2>category={category}</h2>
        <h2>id={id}</h2>

        </>
    );
}

export default Contact;