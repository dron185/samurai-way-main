import axios from "axios";
import {UserType} from "../redux/users-reducer";
import {ProfileType} from "../redux/profile-reducer";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '62a6656e-ad1b-4495-8bfe-e56dcc639e6b',
    },
})

type getUsersResponse = {
    items: UserType[]
    totalCount: number
    error: string | null
}

export type followResponse = {
    resultCode: number
    messages: string[]
    data: {}
    fieldsErrors: []
}


export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<getUsersResponse>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId: number) {
        return instance.post<followResponse>(`follow/${userId}`);
    },
    unfollow(userId: number) {
        return instance.delete<followResponse>(`follow/${userId}`);
    },
}


export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`);
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`);
    },
    updateStatus(status: string) {
        return instance.put<BaseResponse>(`profile/status`, {status});
    }
}


export type DataType = {
    id: number | null
    email: string | null
    login: string | null
}


export type FieldError = {
    error: string
    field: string
}

export type BaseResponse<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
    fieldsErrors: FieldError[]
}

export type LoginParams = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string | null
}

export const authAPI = {
    me() {
        return instance.get<BaseResponse<DataType>>(`auth/me`)
    },
    login(data: LoginParams) {
        return instance.post<BaseResponse<{ userId: number }>>(`auth/login`, data)
    },
    logout() {
        return instance.delete<BaseResponse>(`auth/login`)
    },

}


