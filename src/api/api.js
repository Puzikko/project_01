import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    'API-KEY': '0ad28b8c-6eb9-4b81-bc2e-be90139f7712'
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {

                return response.data
            })
    },

    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => {

                return response.data
            })
    }
};

export const authAPI = {
    authMe() {
        return instance.get('auth/me')
            .then(response => {
                return response.data
            })
    },
    logIn(formData) {
        return instance.post('auth/login', {
            email: formData.login,
            password: formData.password,
        })
            .then(response => {
                debugger
                return response.data
            })
    }
};

export const profileAPI = {
    getUserProfile(id) {
        return instance.get(`profile/` + id)
            .then(response => {
                return response.data
            })
    },

    getUserStatus(id) {
        return instance.get('profile/status/' + id)
            .then(response => response.data)
    },

    putUserStatus(status) {
        return instance.put('profile/status', { status })
            .then(response => response.data)
    }
};