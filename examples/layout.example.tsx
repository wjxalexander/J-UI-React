import React from 'react';
import Layout from "../lib/Layout/layout";
import Header from "../lib/Layout/header";
import Footer from "../lib/Layout/footer";
import Content from "../lib/Layout/content";
import SideBar from "../lib/Layout/sideBar";
import "./layout.example.scss";
const LayoutExample = () => {
  return (
    <div>
      <h1>example 1</h1>
      <Layout style={{height: 200}} >
        <Header className={"layoutOne"}>Header</Header>
        <Content className={"layoutContent"}>Content</Content>
        <Footer className={"layoutOne"}>Footer</Footer>
      </Layout>
      <h1>example 2</h1>
      <Layout style={{height: 200}}>
        <Header className={"layoutOne"}>Header2</Header>
        <Layout>
          <SideBar className={"layoutAside"}>Aside2</SideBar>
          <Content className={"layoutContent"}>Content2</Content>
          <SideBar className={"layoutAside"}>Aside2</SideBar>

        </Layout>
        <Footer className={"layoutOne"}>4</Footer>
      </Layout>
      <h1>example 3</h1>
      <Layout style={{height: 200}}>
        <Header className={"layoutOne"}>1</Header>
        <Layout>
          <Content className={"layoutContent"}>2</Content>
          <SideBar className={"layoutAside"}>4</SideBar>
        </Layout>
        <Footer className={"layoutOne"}>4</Footer>
      </Layout>
      <h1>example 4</h1>
      <Layout style={{height: 200}}>
        <SideBar className={"layoutAside"}>Aside</SideBar>
        <Layout>
          <Header className={"layoutOne"}>1</Header>
          <Content className={"layoutContent"}>2</Content>
          <Footer className={"layoutOne"}>4</Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutExample;