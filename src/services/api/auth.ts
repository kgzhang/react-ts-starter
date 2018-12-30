import http from '@services/http'

export default {
    // login
    login(data): Promise<any> {
        return http.post('auth/login', data || {})
    }
}
