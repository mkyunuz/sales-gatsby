import React from "react"
import { Link } from "gatsby"
import { Form, Input, Button, Checkbox } from 'antd'
import { connect } from 'react-redux';
import authAction from "../redux/actions/AuthAction";
import Layout from "../components/layout"

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};
const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};
const { requestToken } = authAction;
const SecondPage = (props) => {
	console.log(props);
	const onFinish = values => {
	    // const {requestToken} = props;
	    // console.log(requestToken); 
	    requestToken({
	    	username : values.username,
	    	password : values.password
	    });
	};
	const onFinishFailed = errorInfo => {

	};

	return(
		<Layout>
			<div style={{
				position : "absolute",
				top : "50%",
				left : "50%",
				width : 460,
				transform : "translate(-50%, -50%)",
				padding : "20px 20px",
				paddingTop : "30px",
				// border : "1px solid rgba(0,0,0,.1)",
				borderRadius : "5px"
			}}>
		    	<Form
		    	      {...layout}
		    	      name="basic"
		    	      initialValues={{ remember: true }}
		    	      onFinish={onFinish}
		    	      onFinishFailed={onFinishFailed}
		    	    >
		    	      <Form.Item
		    	        label="Username"
		    	        name="username"
		    	        rules={[{ required: true, message: 'Please input your username!' }]}
		    	      >
		    	        <Input />
		    	      </Form.Item>

		    	      <Form.Item
		    	        label="Password"
		    	        name="password"
		    	        rules={[{ required: true, message: 'Please input your password!' }]}
		    	      >
		    	        <Input.Password />
		    	      </Form.Item>

		    	      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
		    	        <Checkbox>Remember me</Checkbox>
		    	      </Form.Item>

		    	      <Form.Item {...tailLayout}>
		    	        <Button type="primary" htmlType="submit">
		    	          Submit
		    	        </Button>
		    	      </Form.Item>
		    	    </Form>
	    	</div>
	    </Layout>
	)
}

// export default SecondPage;

export default connect(
	state => ({
		authReducer : state.authReducer
	}),
	{ requestToken }
)(SecondPage);
