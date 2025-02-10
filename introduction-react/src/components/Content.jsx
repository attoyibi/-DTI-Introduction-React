import { useState } from "react"
import Greeting from "./Greeting"
function Content() {
    const [greeting, setGreeting] = useState("DTI Muchson")
    return <div className="content">
        <Greeting greeting={greeting} />
    </div>
}

export default Content;