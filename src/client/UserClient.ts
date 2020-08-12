import AxiosInstance from "./AxiosInstance";
import {Page} from "@/model/Page";

export class UserClient{
    public static login(userName: string,password: string){
        return AxiosInstance.get('/login?userName='+userName+'&password='+password)
    }
    public static register(credential: Credential){
        return AxiosInstance.post('/register',credential,{})
    }

    public static updateUserPassword(userId: number, password: string){
        return AxiosInstance.put('/user/password/'+userId+'?password='+password)
    }

    public static delUser(userId: number){
        return AxiosInstance.delete('/user/'+userId)
    }
    public static async getUser(){
        return (await AxiosInstance.get('/user',{})).data
    }
}
