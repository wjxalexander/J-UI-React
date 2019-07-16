import * as React from "react";
import * as ReactDOM from "react-dom";
import {HashRouter as Router, Route, Link} from "react-router-dom";
import IconExample from "./examples/icon.example";
import DialogExample from "./examples/dialog.example";
import ButtonExample from "./examples/button.example";
import LayoutExample from "./examples/layout.example";
import "./example.scss"

ReactDOM.render((
  <Router>
    <header></header>
    <div>
      <aside>
        <h2>entry</h2>
        <ul>
          <li><Link to="/icon">Icon</Link></li>
          <li><Link to="/button">Button</Link></li>
          <li><Link to="/dialog">Dialog</Link></li>
          <li><Link to="/button">Button</Link></li>
          <li><Link to="/layout">Layout</Link></li>


        </ul>
      </aside>
      <main>
        <Route path="/icon" component={IconExample}/>
        <Route path="/dialog" component={DialogExample}/>
        <Route path="/button" component={ButtonExample}/>
        <Route path="/layout" component={LayoutExample}/>

      </main>
    </div>
  </Router>
), document.body.querySelector(("#root")));