import * as React from "react";
import * as ReactDOM from "react-dom";
import {HashRouter as Router, Route, Link} from "react-router-dom";
import IconExample from "./examples/icon.example";

ReactDOM.render((
    <Router>
        <header></header>
        <div>
            <aside>
                <h2>entry</h2>
                <ul>
                    <li><Link to="/icon">Icon</Link></li>
                    <li><Link to="/button">Button</Link></li>
                </ul>
            </aside>
            <main>
                <Route path="/icon" component={IconExample} />
            </main>
        </div>
    </Router>
), document.body.querySelector(("#root")));