import AxiosInstance from "./AxiosInstance";
import { Page } from '@/model/Page';
import {Article, SubType, Type} from "@/model/Article";

export class ArticleClient{

    static postEntry(article: string, title: string,type: Type){
        return AxiosInstance.post('/article/'+type+'/'+title,article,{
            headers: { 'Content-Type': 'text/plain' }
        })
    }

    static postEntryWithSubType(article: string, title: string,type: Type,subType: SubType){
        return AxiosInstance.post('/article/'+type+'/'+subType+'/'+title,article,{
            headers: { 'Content-Type': 'text/plain' }
        })
    }

    static postEntryTaxFree(article: string, title: string,type: string,value: string,registry: string){
        return AxiosInstance.post('/article/'+title+'/registry/'+registry+'/value/'+value+'/type/'+type,article,{
            headers: { 'Content-Type': 'text/plain' }
        })
    }

    static postCover(id: number, picB64: string){
        return AxiosInstance.post('/article/'+id+'/cover',picB64,{
            headers: { 'Content-Type': 'application/octet-stream' }
        })
    }

    static delCover(id: number){
        return AxiosInstance.delete('/article/'+id+'/cover',{
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

    static async getArticleDto(id: number): Promise<Article>{
        return (await AxiosInstance.get('/article/'+id+'/dto',{  })).data as Article
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

    static async postHeadline(id: number){
        return await AxiosInstance.post('/article/'+id+'/headline')
    }

    static async delHeadline(id: number){
        return await AxiosInstance.delete('/article/'+id+'/headline')
    }

    static async putTop(id: number,value: boolean){
        return await AxiosInstance.put('/article/'+id+'/top/'+value)
    }

    static async putArticleProperties(id: number,registry: string,wareHouseType: string, value: string){
        return await AxiosInstance.put('/article/wareHouse/properties/'+id,{},{
            params:{
                registry,
                wareHouseType,
                value
            }
        })
    }
}
