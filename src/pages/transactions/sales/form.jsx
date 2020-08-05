import React from "react"
import { Link } from "gatsby"
import { Form, Input, Button, Checkbox , Breadcrumb, Space, Row, Col, Table} from 'antd';
import Layout from "../../../components/layout"
import Image from "../../../components/image"
import SEO from "../../../components/seo"

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};
const columns = [
	{
		title: 'No',
		dataIndex: 'no',
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
		title: 'Product Name',
		dataIndex: 'product_name',
		// defaultSortOrder: 'descend',
		sorter: (a, b) => a.category_name - b.category_name,
  	},
  	{
		title: 'Price',
		dataIndex: 'price',
		sorter: (a, b) => a.product_category - b.product_category,
  	},
  	{
		title: 'Qty',
		dataIndex: 'qty',
		sorter: (a, b) => a.product_category - b.product_category,
  	},
  	{
		title: 'Discount',
		dataIndex: 'discount',
		sorter: (a, b) => a.product_category - b.product_category,
  	},
  	{
		title: 'Total',
		dataIndex: 'total',
		sorter: (a, b) => a.product_category - b.product_category,
  	},
];
function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}
const data = [];
const ProductFormPage = () => {
	const onFinish = values => {
	    console.log('Success:', values);
	};

	const onFinishFailed = errorInfo => {
    	console.log('Failed:', errorInfo);
  	};
  return(
    <Layout>
      <SEO title="Home" />
      <Breadcrumb>
          <Breadcrumb.Item>New Sales</Breadcrumb.Item>
      </Breadcrumb>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      	className="mt-3"
      	size="default"
      >
        <Row gutter={16}>
	          <Col className="gutter-row" span={12}>
		        <Form.Item
		          label="Transaction Number"
		          name="product_code"
		          rules={[{ required: true, message: 'This field is required' }]}
		        >
		        	<Input autoFocus={true} />
		        </Form.Item>

	          </Col>
	          <Col className="gutter-row" span={12}>
		        <Form.Item
		          label="Work Order"
		          name="work_order"
		          rules={[{ required: true, message: 'This field is required' }]}
		        >
		        	<Input />
		        </Form.Item>

	          </Col>
        </Row>
        <Row gutter={16}>
	          <Col className="gutter-row" span={12}>
	          	<Form.Item
	          	  label="Registration Number"
	          	  name="work_order"
	          	  rules={[{ required: true, message: 'This field is required' }]}
	          	>
	          		<Input />
	          	</Form.Item>
	          </Col>
	          <Col className="gutter-row" span={12}>
	          	<Form.Item
	          	  label="Customer"
	          	  name="customer"
	          	  rules={[{ required: true, message: 'This field is required' }]}
	          	>
	          		<Input />
	          	</Form.Item>
	          </Col>
        </Row>
        <Row gutter={16}>
	          <Col className="gutter-row" span={12}>
	          	<Form.Item
	          	  label="Mekanik"
	          	  name="mekanik"
	          	  rules={[{ required: true, message: 'This field is required' }]}
	          	>
	          		<Input />
	          	</Form.Item>
	          </Col>
	          <Col className="gutter-row" span={12}>
	          	<Form.Item
	          	  label="Cashier"
	          	  name="cashier"
	          	  rules={[{ required: true, message: 'This field is required' }]}
	          	>
	          		<Input />
	          	</Form.Item>
	          </Col>
        </Row>
        
        <Row gutter={16}>
	          <Col className="gutter-row" span={24}>
	          	<Table bordered={true} className="mt-3" size="middle" columns={columns} dataSource={data} onChange={onChange} />  
	          </Col>
        </Row>
        
        {/*<Form.Item {...tailLayout}>
        	<Space>
          		<Button type="primary" htmlType="submit">Submit</Button>
          		<Button type="danger" htmlType="reset">Cancel</Button>
          </Space>
        </Form.Item>*/}
      </Form>
    </Layout>
)
}

export default ProductFormPage
