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
		title: 'Code',
		dataIndex: 'code',
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
	    onFilter: (value, record) => record.code.indexOf(value) === 0,
	    sorter: (a, b) => a.code.length - b.code.length,
	},
  	{
		title: 'Category Name',
		dataIndex: 'category_name',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.category_name - b.category_name,
  	},
];
function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}
const CategoriesPage = () => {
  const create = () =>{

    return navigate("/categories/form");
  }
  return(
    <Layout>
      <SEO title="Home" />
      <Breadcrumb>
          <Breadcrumb.Item>Categories</Breadcrumb.Item>
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
)(CategoriesPage);
