import request from "superagent";

export function getPostApi() {
    return request.get('/api/v1/blog')
    .then ((resp)=> {
        return resp.body
    })
}

export function addPostApi(data) {
    return request.post('/api/v1/blog').send(data)
    .then ((resp) => {
        return resp.body
    })
}