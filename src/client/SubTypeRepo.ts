import {JpaDataRepository} from '@lu1kaifeng/jpa-data-table/src/components/JpaDataTable'
import {Article, ArticleManagement, ArticleView, SubType, Type} from "@/model/Article";
import {PageRequest} from "@lu1kaifeng/jpa-data-table/src/model/PageRequest"
import { Page } from '@lu1kaifeng/jpa-data-table/src/model/Page';
import AxiosInstance from "@/client/AxiosInstance";
export default function(type: Type,subType: SubType){
        return async function(request: PageRequest): Promise<Page<Article>>{
            const page = (await AxiosInstance.post('/article/page/type/'+type+'/subType/'+subType,request,{

            })).data as Page<Article>
            const content = [];
            for(const c of page.content){
                content.push(new ArticleView(c));
            }
            page.content = content;
            return page;
        };
}
