import React from "react";

function Prod(props) {
    return(
        <tr>
            <td>{props.libele}</td>
            <td>{props.cat}</td>
            <td>{props.prix}</td>
        </tr>
    )
}

export default Prod