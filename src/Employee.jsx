import React from "react";

const Employee = (props) => {
    console.log(props);
    return (
        <h2>This is {props.firstName} {props.lastName}</h2>

    );

}

export default Employee;