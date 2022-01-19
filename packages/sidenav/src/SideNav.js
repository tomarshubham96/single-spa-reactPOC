import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { FaGem, FaHeart } from "react-icons/fa";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import singleSpaReact from 'single-spa-react';

export default function SideNav (){
  const [collapsed, setCollapsed] = useState(true);
  // added styles 
  const styles = {
    sideBarHeight: {
      height: "100%",
    },
    menuIcon: {
      float: "right",
      margin: "10px",
    },
  };
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };
  return (
    <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
      <SidebarHeader>
        <div style={styles.menuIcon} onClick={onClickMenuIcon}>
          <AiOutlineMenu />
        </div>
      </SidebarHeader>
      <Menu iconShape="square">
        <MenuItem icon={<FaGem />}> Dashboard</MenuItem>
        <MenuItem icon={<FaGem />}>Users</MenuItem>
        <SubMenu title="Reports" icon={<FaHeart />}>
          <MenuItem>Track Report</MenuItem>
          <MenuItem>Inventory Report</MenuItem>
          <MenuItem>Customer Report</MenuItem>
        </SubMenu>
        <SubMenu title="Account" icon={<FaHeart />}>
          <MenuItem>Permissions</MenuItem>
          <MenuItem>Settings</MenuItem>
        </SubMenu>
        <SubMenu title="Email" icon={<FaHeart />}>
          <MenuItem>Notification</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
}

const sidenavLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: SideNav
});

export const bootstrap = sidenavLifecycles.bootstrap;
export const mount = sidenavLifecycles.mount;
export const unmount = sidenavLifecycles.unmount;