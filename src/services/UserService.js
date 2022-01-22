import { create } from "./BaseService";

const http = create()

export const getUserInfo = () => {
    return http.get('/account/me')
}