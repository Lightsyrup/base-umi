import request from "umi-request";

export async function saySomething(){
    return request(`'GET /api/users'`)
}