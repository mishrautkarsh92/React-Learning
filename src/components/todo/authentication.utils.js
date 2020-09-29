import axios from "axios";
import {AUTHENTICATED_USER, API_URL} from '../../api/todo/constants'
class AuthenticationUtils {


    executeBasicAuthenticationService(username, password) {
        return axios.get(`${API_URL}/basicauth`, { headers: { authorization: this.createBasicAuthToken(username, password) } })
    }

    executeJwtAuthenticationService(username, password) {
        return axios.post(`${API_URL}/authenticate`,
         {username, password}
         )
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    createJwtAuthToken(token) {
        return 'Bearer ' + token
    }

    registerSuccessfulLogin(username, password) {
        //let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
        sessionStorage.setItem(AUTHENTICATED_USER, username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }

    registerSuccessfulLoginForJwt(username, token) {
        //let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
        sessionStorage.setItem(AUTHENTICATED_USER, username);
        this.setupAxiosInterceptors(this.createJwtAuthToken(token))
    }

    logout() {
        sessionStorage.removeItem(AUTHENTICATED_USER);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(AUTHENTICATED_USER)
        if (user === null) return false
        return true
    }

    getLoggedInUser() {
        let user = sessionStorage.getItem(AUTHENTICATED_USER)
        if (user === null) return ''
        return user
    }

    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}

export default new AuthenticationUtils();