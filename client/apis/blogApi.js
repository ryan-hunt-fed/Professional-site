import request from "superagent";

export function getPostApi() {
    return request.get('/api/v1/blog')
    .then ((resp)=> {
        return resp.body
    })
}

export function addPostApi(data) {
    // console.log(data, 'from api')
    return request.post('/api/v1/blog')
    .send(data)
    .then ((resp) => {
        console.log(resp, 'from api')
        return resp.body
    })
}

export function delPostApi(id) {
    return request.delete('/api/v1/blog/' + id)
    .then((resp) => {
      console.log('Client Api',resp.body)
      return resp.body
    })
  }