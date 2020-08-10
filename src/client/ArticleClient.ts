import AxiosInstance from "./AxiosInstance";
import { Page } from '@/model/Page';
import {Type} from "@/model/Article";

export class ArticleClient{

    static postEntry(article: string, title: string,type: Type){
        return AxiosInstance.post('/article/'+type+'/'+title,article,{
            headers: { 'Content-Type': 'text/plain' }
        })
    }

    static postCover(id: number, picB64: string){
        return AxiosInstance.post('/article/'+id+'/cover',picB64,{
            headers: { 'Content-Type': 'application/octet-stream' }
        })
    }

    static async getCover(id: number,index: number): Promise<string>{
        return AxiosInstance.get('/article/'+id+'/cover/'+index,{ responseType: 'arraybuffer' }).then((response) => {
            const image = btoa(
                new Uint8Array(response.data)
                    .reduce((data, byte) => data + String.fromCharCode(byte), '')
            );
            return image;
        });
    }

    static async getArticle(id: number){
        return await AxiosInstance.get('/article/'+id,{ responseType: 'text' })
    }

    static async publish(id: number){
        return await AxiosInstance.get('/article/'+id+'/publish')
    }

    static async delete(id: number){
        return await AxiosInstance.delete('/article/'+id)
    }

    static updateArticle(article: string, id: number){
        return AxiosInstance.put('/article/'+id,article,{
            headers: { 'Content-Type': 'text/plain' }
        })
    }
}