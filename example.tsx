import * as React from "react";
import * as ReactDOM from "react-dom";
import {HashRouter as Router, Route, NavLink} from "react-router-dom";
import DialogExample from "./examples/dialog.example";
import ButtonExample from "./examples/button.example";
import LayoutExample from "./examples/layout.example";
import "./example.scss"
import {Layout, Header, Footer, Content, SideBar} from "./lib/Layout";
import IconDemo from "./examples/demos/icondemo/icon.demo";
import FormExample from "./examples/form.example";
import CardExample from "./examples/card.example";
import InputExample from "./examples/input.example";

ReactDOM.render((
  <Router>
    <Layout>
      <Header> J-UI-React</Header>
      <Layout className="example-site-wrapper">
        <SideBar className="example-nav-bar">
          <ul>
            <li><NavLink to="/icon">Icon</NavLink></li>
            <li><NavLink to="/button">Button</NavLink></li>
            <li><NavLink to="/dialog">Dialog</NavLink></li>
            <li><NavLink to="/layout">Layout</NavLink></li>
            <li><NavLink to="/form">Form</NavLink></li>
            <li><NavLink to="/card">Card</NavLink></li>
            <li><NavLink to="/input">Input</NavLink></li>

          </ul>
        </SideBar>
        <Content className='example-content'>
          <Route path="/icon" component={IconDemo}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/layout" component={LayoutExample}/>
          <Route path="/form" component={FormExample}/>
          <Route path="/card" component={CardExample}/>
          <Route path="/input" component={InputExample}/>


        </Content>
        <SideBar>ghj</SideBar>
      </Layout>
      <Footer>2019</Footer>
    </Layout>
  </Router>
), document.body.querySelector(("#root")));