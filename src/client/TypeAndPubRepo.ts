import {JpaDataRepository} from '@lu1kaifeng/jpa-data-table/src/components/JpaDataTable'
import {Article, Type} from "@/model/Article";
import {PageRequest} from "@lu1kaifeng/jpa-data-table/src/model/PageRequest"
import { Page } from '@lu1kaifeng/jpa-data-table/src/model/Page';
import AxiosInstance from "@/client/AxiosInstance";
export default function(type: Type,published: boolean | undefined){
    if(published !== undefined)
    return async function(request: PageRequest): Promise<Page<Article>>{
            return AxiosInstance.post('/antique/type/'+type+'/published/'+published,request,{

            })

    };
    else return async function (request: PageRequest): Promise<Page<Article>>{
        return AxiosInstance.post('/antique/type/'+type,request,{

        })
    }
}
