import $api from "../http/index"
import {AxiosResponse} from 'axios'
import { AuthResponse } from "../models/response/AuthResponse"
import { IUser } from "../models/IUser"

export default class UserService{
    static fetchUsers():Promise<AxiosResponse<IUser[]>>{
        return $api.get<IUser[]>("/users")
    }
    static async changeUserName(userName:string):Promise<AxiosResponse<IUser[]>>{
        return $api.post<IUser[]>("/changeUserName",{userName})
    }
}
