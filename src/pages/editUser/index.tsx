import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const EditUser = ({ searchInput, handleSearch, handleReset, dispatch, data }: any) => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

  useEffect(() => {
    dispatch({
      type: 'editUserState/getUserList',
      payload: null,
    });
  });

  const getColumnSearchProps = (dataIndex): any => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0]), setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text: any) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          setSw
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]), setSearchedColumn(dataIndex);
  };

  handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
  };
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
      ...getColumnSearchProps('age'),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      ...getColumnSearchProps('address'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

function mapStateToProps(state: any) {
  return { data: state.editUserState.userData };
}

export default connect(mapStateToProps)(EditUser);
