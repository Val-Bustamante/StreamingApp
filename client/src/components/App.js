import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom"

const PageOne = () => {
    return (
        <div>
            <Link to="/pagetwo">Navigate to page two</Link>
        </div>
    )
}

const PageTwo = () => {
    return (
        <div>
            <Link to="/">Navigate to Page one</Link>
        </div>
    )
}

const App = () => {
    return (
        <div>
            {/*BrowserRouter only cares about /....*/}
            {/*exact= a prop of Route that matches the path exactly*/}
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pagetwo" component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;