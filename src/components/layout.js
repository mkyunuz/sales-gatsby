/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql} from "gatsby"
import { Layout, Menu } from 'antd';

// import MainHeader from "./header"
import Sidebar from "./Sidebar"
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';


import "./layout.css"
import 'antd/dist/antd.css'; 
import "../App.css"
const { Header, Content, Footer, Sider } = Layout;
const MainLayout = ({ children }) => {

const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  const [state, setState] = useState({
    collapsed: false,
    openKeys : [],
    contentWidth : 225,
  });
  useEffect(() => {
    var isLoad = false;
    if(!isLoad){
      // var url = window.location.url;
      var path = window.location.pathname.substring(1);
      var collapsedMenu = [];
      var activeMenu = [];
      var tmpPathArray = [];
      var pathArray = [];
      if(path){
        tmpPathArray = path.split("/");
        tmpPathArray.map((val, idx) => {
          // console.log(val);
          pathArray.push(`nav-${val}`);
        });
        activeMenu.push(pathArray.pop());
        for(var i= 0; i < pathArray.length; i++){
          collapsedMenu.push(pathArray[i]);
        }
      }
      setState((prevState, props) => ({
        ...prevState,
        openKeys : ["nav-master"]
      }));
      console.log(state);
    }
    return () => {isLoad = true};
  }, []);
  const onCollapse = () => {
      // console.log(collapsed);
      var contentWidth = 80;
      if(state.collapsed){
        contentWidth = 225;
      }
      setState((prev, props) => ({
        ...prev, 
        collapsed : !prev.collapsed,
        contentWidth : contentWidth
      }));
  };
  /*const toggle = () => {
      setState((prev, props) =>({
        collapsed: !this.state.collapsed,
      }));
    };*/
  return (
    <>
    <Layout theme="light">
        <Sidebar />
        <Layout className="site-layout" style={{ marginLeft: state.contentWidth , minHeight : "100vh"}}>
          <Header className="site-layout-header-background" style={{ paddingLeft: 10 }}>
            {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: onCollapse,
            })}
          </Header>
          <Content style={{ margin: '4px 4px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24}}>
              <main>{children}</main>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
     
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
