import request from 'umi-request';

export async function saySomething() {
  return request('/api/users/1');
}
