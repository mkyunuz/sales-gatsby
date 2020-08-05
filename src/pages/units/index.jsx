
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import { Link, navigate } from "gatsby"
import {connect} from 'react-redux';
import { Button, Space,  Breadcrumb, Table} from 'antd';

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import data from "./data"

const columns = [
  {
    title: 'Name',
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
    sortDirections: ['descend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
  },
];
function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}
const UnitPage = () => {
  const create = () =>{

    return navigate("/units/form");
  }
  return(
    <Layout>
      <SEO title="Home" />
      <Breadcrumb>
          <Breadcrumb.Item>Units</Breadcrumb.Item>
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

      <Table bordered={true} className="mt-3" size="middle" columns={columns} dataSource={data} onChange={onChange} />  
    </Layout>
)
}

// export default UnitPage
export default connect(
  state => ({

  }),
  { }
)(UnitPage);
