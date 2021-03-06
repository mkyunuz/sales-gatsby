import React from "react"
import { Link } from "gatsby"
import { Form, Input, Button, Checkbox , Breadcrumb, Space} from 'antd';
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};
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
          <Breadcrumb.Item>New Product</Breadcrumb.Item>
      </Breadcrumb>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      	className="mt-3"
      	size="large"
      >
        <Form.Item
          label="Product Code"
          name="product_code"
          rules={[{ required: true, message: 'This field is required' }]}
        >
        	<Input autoFocus={true} />
        </Form.Item>
        <Form.Item
          label="Product Name"
          name="product_name"
          rules={[{ required: true, message: 'This field is required' }]}
        >
        	<Input />
        </Form.Item>
        <Form.Item
          label="Product Category"
          name="product_category"
          rules={[{ required: true, message: 'This field is required' }]}
        >
        	<Input />
        </Form.Item>
        <Form.Item
          label="Unit"
          name="unit"
          rules={[{ required: true, message: 'This field is required' }]}
        >
        	<Input />
        </Form.Item>
        <Form.Item
          label="Stock"
          name="stock"
          rules={[{ required: true, message: 'This field is required' }]}
        >
        	<Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
        	<Space>
          		<Button type="primary" htmlType="submit">Submit</Button>
          		<Button type="danger" htmlType="reset">Cancel</Button>
          </Space>
        </Form.Item>
      </Form>
    </Layout>
)
}

export default ProductFormPage
