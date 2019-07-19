import * as React from "react";
import * as ReactDOM from "react-dom";
import {HashRouter as Router, Route, Link} from "react-router-dom";
import IconExample from "./examples/icon.example";
import DialogExample from "./examples/dialog.example";
import ButtonExample from "./examples/button.example";
import LayoutExample from "./examples/layout.example";
import "./example.scss"
import {Layout, Header, Footer, Content, SideBar} from "./lib/Layout";


ReactDOM.render((
  <Router>
    <Layout>
      <Header> J-UI-React</Header>
      <Layout>
        <SideBar>
          <ul>
            <li><Link to="/icon">Icon</Link></li>
            <li><Link to="/button">Button</Link></li>
            <li><Link to="/dialog">Dialog</Link></li>
            <li><Link to="/button">Button</Link></li>
            <li><Link to="/layout">Layout</Link></li>


          </ul>
        </SideBar>
        <Content>
          <Route path="/icon" component={IconExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/layout" component={LayoutExample}/>

        </Content>
        <SideBar>ghj</SideBar>
      </Layout>
      <Footer>2019</Footer>
    </Layout>
  </Router>
), document.body.querySelector(("#root")));