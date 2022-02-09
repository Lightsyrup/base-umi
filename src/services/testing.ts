import request from 'umi-request';

export async function saySomething() {
  return request('/api/users/1');
}

export async function getCity() {
  return request('/api/tags');
}

export async function getUsers() {
  return request('/api/userdatas');
}

// post请求
export async function setUser(params:any){
  console.log(params)
  // return request('url',{类型与数据层})
  return request('url',{
    method:'POST',
    data:params
  })
}