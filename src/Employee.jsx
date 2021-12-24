import React from "react";

const Employee = (props) => {
    console.log(props);
    const { firstName, lastName, hobby } = props;
    return (
        <div>
            <h2>This is {firstName} {lastName}</h2>
            <p>Their hobby is {hobby} </p>
        
        </div>
        

    );

}

export default Employee;