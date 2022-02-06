import {create} from './BaseService'

const http = create({
    useAccessToken: false
})

export const login = (body) => {
    console.log(body)
    return http.post('/account/login', body)
}
export const register = (body) => {
return http.post('/account/register', body)
}