import React, { useState } from "react"
import { Link} from "gatsby"
import { Layout, Menu } from 'antd';
import {connect} from 'react-redux';
import {
  FilePdfOutlined,
 
  UserOutlined,
  DashboardOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';
import appAction from "../redux/actions/AppAction";
const { Sider } = Layout;
const { SubMenu } = Menu;

const {changeNav} = appAction;
function Sidebar(props){
	const [state, setState] = useState({
	  collapsed: false,
	  openKeys : [],
	  contentWidth : 225,
	});

	const handleMenu = (e) => {
		const {changeNav} = props;
		var keyPath = e.keyPath || [];
		if(keyPath){
			var activeMenu = [keyPath.shift(0)];
			var openKeys=keyPath; 
			changeNav({
				activeMenu : activeMenu,
				openKeys : openKeys
			})
		}
	}
	return(
		<Sider
		  style={{
		    overflow: 'auto',
		    height: '100vh',
		    position: 'fixed',
		    left: 0,
		  }}
		  trigger={null}
		  collapsible
		  className="site-layout-background"
		  width={225}
		  collapsed={state.collapsed}
		  id="components-layout-demo-fixed-sider"
		>
		  <div className="logo" />
		  <Menu onClick={handleMenu} theme="light" mode="inline" defaultOpenKeys={props.appReducer.openKeys} defaultSelectedKeys={props.appReducer.activeMenu}>
		    <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
		      <Link to="/">Dashboard</Link>
		    </Menu.Item>
		    <SubMenu key="nav-master" icon={<DatabaseOutlined />} title="Master"  >
		    {/*<SubMenu key="nav-master" icon={<DatabaseOutlined />} title="Master" onTitleClick={() => chageNav({openKeys : ["nav-master"]})}>*/}
		      <Menu.Item key="nav-units">
		        <Link to="/units">Units</Link>
		      </Menu.Item>
		      <Menu.Item key="nav-supplier">
		        <Link to="/suppliers">Suppliers</Link>
		      </Menu.Item>
		      <Menu.Item key="nav-categories">
		        <Link to="/categories">Categories</Link>
		      </Menu.Item>
		      <Menu.Item key="nav-products">
		        <Link to="/products">Products</Link>
		      </Menu.Item>
		    </SubMenu>
		    <SubMenu key="nav-transactions" icon={<UserOutlined />} title="Transactions">
		      <Menu.Item key="nav-trx-po">PO</Menu.Item>
		      <Menu.Item key="nav-trx-sales"><Link to={"/transactions/sales"}>Sales</Link></Menu.Item>
		    </SubMenu>
		    <SubMenu key="nav-report" icon={ <FilePdfOutlined />} title="Reports">
		      <Menu.Item key="nav-rpt-supplier">PO</Menu.Item>
		      <Menu.Item key="nav-rpt-units">Sales</Menu.Item>
		      <Menu.Item key="nav-rpt-products">Products</Menu.Item>
		    </SubMenu>
		  </Menu>
		</Sider>
	);
}

// export default Sidebar;
export default connect(
  state => ({
  	appReducer : state.appReducer
  }),
  { changeNav }
)(Sidebar);