import {JpaDataRepository} from '@lu1kaifeng/jpa-data-table/src/components/JpaDataTable'
import {Article, ArticleManagement, ExhibitionArticleView, NewsArticleView, SubType, Type} from "@/model/Article";
import {PageRequest} from "@lu1kaifeng/jpa-data-table/src/model/PageRequest"
import { Page } from '@lu1kaifeng/jpa-data-table/src/model/Page';
import AxiosInstance from "@/client/AxiosInstance";
export default function(type: Type,subType: SubType,admin: boolean){
    if(!admin)
         return async function (request: PageRequest): Promise<Page<Article>>{
        const page =  (await AxiosInstance.post('/article/page/type/'+type+'/subType/'+subType+'/all',request,{

        })).data
        const content = []
        for(const c of page.content){
            content.push(new ArticleManagement(c));
        }
        page.content = content;
        return page
    }; else return async function (request: PageRequest): Promise<Page<Article>>{
        const page =  (await AxiosInstance.post('/article/page/type/'+type+'/subType/'+subType+'/user',request,{

        })).data
        const content = []
        for(const c of page.content){
            content.push(new ArticleManagement(c));
        }
        page.content = content;
        return page
    }

}
