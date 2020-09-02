import {Article, Type} from "@/model/Article";
import AxiosInstance from "@/client/AxiosInstance";
import {StaticPage} from "@/model/StaticPage";

export class StaticPageClient {
    static postEntry(article: string, title: string){
        return AxiosInstance.post('/static/page/'+title,article,{
            headers: { 'Content-Type': 'text/plain' }
        })
    }
    static async getStaticPage(id: number){
        return await AxiosInstance.get('/static/page/'+id,{ responseType: 'text' })
    }

    static async getStaticPageDto(id: number): Promise<StaticPage>{
        return (await AxiosInstance.get('/static/page/'+id+'/dto',{  })).data as StaticPage
    }
    static async delStaticPage(id: number){
        return await AxiosInstance.delete('/static/page/'+id,{  })
    }
    static async getStaticPageDtoList(): Promise<StaticPage[]>{
        return (await AxiosInstance.get('/static/page/list',{  })).data as StaticPage[]
    }
    static updateEntry(article: string, id: number){
        return AxiosInstance.post('/static/page/'+id,article,{
            headers: { 'Content-Type': 'text/plain' }
        })
    }
}
