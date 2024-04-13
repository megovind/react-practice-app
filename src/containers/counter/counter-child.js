import React, { Fragment, useEffect } from "react";

export default function Child({ returnComment }) {

    useEffect(() => {
        console.log("This is use callback test");
    }, [returnComment]);

    return (<Fragment>
        <div>{returnComment("Govind")}</div>
    </Fragment>);
}