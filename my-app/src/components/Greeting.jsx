import React, { useState } from "react";

function Greeting() {
    const [name] = useState("Digital Talent Indonesia");

    return (
        <div className="greeting">
            <h2>Halo, {name}!</h2>
        </div >
    );
}

export default Greeting;
