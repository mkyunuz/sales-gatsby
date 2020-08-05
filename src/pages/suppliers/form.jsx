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
const SupplierFormPage = () => {
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
          <Breadcrumb.Item>New Units</Breadcrumb.Item>
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
          label="Supplier Name"
          name="supplier_name"
          rules={[{ required: true, message: 'This field is required' }]}
        >
        	<Input autoFocus={true} />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: 'This field is required' }]}
        >
        	<Input />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[{ required: true, message: 'This field is required' }]}
        >
        	<Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
        >
        	<Input />
        </Form.Item>
        <Form.Item
          label="Note"
          name="note"
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

export default SupplierFormPage
