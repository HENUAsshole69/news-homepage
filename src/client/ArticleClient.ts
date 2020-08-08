import AxiosInstance from "./AxiosInstance";
import { Page } from '@/model/Page';

export class ArticleClient{
    static postAntique(antique: string,title: string){
        return AxiosInstance.post('/antique/'+title,antique,{
            headers: { 'Content-Type': 'text/plain' }
        })
    }

    static postArticle(article: string,title: string){
        return AxiosInstance.post('/article/'+title,article,{
            headers: { 'Content-Type': 'text/plain' }
        })
    }

    static async getCover(id: number,index: number): Promise<string>{
        return AxiosInstance.get('/article/'+id+'/pic/'+index,{ responseType: 'arraybuffer' }).then((response) => {
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

}
