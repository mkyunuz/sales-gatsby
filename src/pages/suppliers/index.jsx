import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import { Link, navigate } from "gatsby"
import {connect} from 'react-redux';
import { Button, Space,  Breadcrumb, Table} from 'antd';

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
const data = [];

const columns = [
	{
		title: 'Supplier Name',
		dataIndex: 'name',
		filters: [
			{
		    	text: 'Joe',
		    	value: 'Joe',
		  	}, 
		  	{
	    		text: 'Jim',
	    		value: 'Jim',
	  		}, 
	  		{
	        	text: 'Submenu',
	        	value: 'Submenu',
	        	children: [
	          		{
	            		text: 'Green',
	            		value: 'Green',
	          		},
	          		{
	            		text: 'Black',
	            		value: 'Black',
	          		},
	        	],
	      	},
	    ],
	    onFilter: (value, record) => record.name.indexOf(value) === 0,
	    sorter: (a, b) => a.name.length - b.name.length,
	},
  	{
		title: 'Phone',
		dataIndex: 'phone_number',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.phone_number - b.phone_number,
  	},
  	{
		title: 'Email',
		dataIndex: 'email',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.email - b.email,
  	},
  	{
		title: 'Address',
		dataIndex: 'address',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.address - b.address,
  	},
];
function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}
const SupplierPage = () => {
  const create = () =>{

    return navigate("/suppliers/form");
  }
  return(
    <Layout>
      <SEO title="Home" />
      <Breadcrumb>
          <Breadcrumb.Item>Suppliers</Breadcrumb.Item>
      </Breadcrumb>
      <div className="search-container">
        <div className="search-item">

                {/*<Button type="primary">Search</Button>*/}
        </div>
        <div className="search-item">
          <Space>
                <Button onClick={create} type="primary">Create</Button>
          </Space>

        </div>
      </div>

      <Table className="mt-3" size="middle" columns={columns} dataSource={data} onChange={onChange} />  
    </Layout>
)
}

// export default UnitPage
export default connect(
  state => ({

  }),
  { }
)(SupplierPage);
