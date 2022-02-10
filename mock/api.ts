import mockjs from 'mockjs';

export default {
  // 支持值为 Object 和 Array
  'GET /api/users': { users: [1, 2] },

  // GET 可忽略
  '/api/users/1': { ids: 10 },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },
  // ----------引入mock测试
  '/api/tags': mockjs.mock({
    // list中包含50条字符串，{name:'上海市',value:66, type:1}
    'list|50': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  }),

  '/api/userdatas': {
    userData: [
      {
        key: '1',
        name: 'John Brown',
        age: 62,
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        name: 'Joe Black',
        age: 40,
        address: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        name: 'Jim Green',
        age: 50,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '4',
        name: 'Jim Red',
        age: 33,
        address: 'London No. 2 Lake Park',
      },
      {
        key: '5',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
      },
      {
        key: '6',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
      },
      {
        key: '7',
        name: 'Jim Red',
        age: 25,
        address: 'London No. 2 Lake Park',
      },
      {
        key: '8',
        name: 'Jim Red',
        age: 85,
        address: 'New York No. 2 Lake Park',
      },
    ],
  },
  // 后续key值使用uniqueId生成
  '/api/masterpage': {
    userData: [
      {
        key: '1',
        name: 'John Brown',
        age: 62,
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        name: 'Joe Black',
        age: 40,
        address: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        name: 'Jim Green',
        age: 50,
        address: 'Sidney No. 1 Lake Park',
      },
    ],
  },
};
