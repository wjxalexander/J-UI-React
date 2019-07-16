import React from 'react';
import Layout from "../lib/Layout/layout";
import Header from "../lib/Layout/header";
import Footer from "../lib/Layout/footer";
import Content from "../lib/Layout/content";
import SideBar from "../lib/Layout/sideBar";

const LayoutExample = () => {
  return (
    <div>
      <h1>example 1</h1>
      <Layout style={{height: 200}}>
        <Header>1</Header>
        <Content>2</Content>
        <Footer>4</Footer>
        <SideBar>4</SideBar>
      </Layout>
      <h1>example 2</h1>
      <Layout style={{height: 200}}>
        <Header>1</Header>
        <Layout>
          <SideBar>4</SideBar>
          <Content>2</Content>
        </Layout>
        <Footer>4</Footer>
      </Layout>
      <h1>example 3</h1>
      <Layout style={{height: 200}}>
        <Header>1</Header>
        <Layout>
          <Content>2</Content>
          <SideBar>4</SideBar>
        </Layout>
        <Footer>4</Footer>
      </Layout>
      <h1>example 4</h1>
      <Layout style={{height: 200}}>
        <SideBar>4</SideBar>
        <Layout>
          <Header>1</Header>
          <Content>2</Content>
          <Footer>4</Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutExample;