import request from "superagent";

export function getDogImageApi() {
    return request.get('https://dog.ceo/api/breeds/image/random/3')
    .then ((resp)=> {
        console.log(resp, 'from api')
        return resp.body
    })
}