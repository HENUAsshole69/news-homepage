import { Header } from '@lu1kaifeng/jpa-data-table/src/decorator/HeaderDecorator';
import { TableItem } from '@lu1kaifeng/jpa-data-table/src/decorator/TableItemDecorator';

export interface Article {
    id: number;
    title: string;
    published: boolean;
    time: string;
    type: Type;
    headline: boolean;
    subType?: SubType | Type;
    registry?: string;
    value?: string;
    wareHouseType?: string;
}

export type Type = 'NEWS' |
'ACTIVITY'|
    'POLICY'|
    'ANNOUNCE'|
    'TAX_FREE'|
    'EXHIBITION'|
    'AUCTION'

export type SubType = 'PAINTING' |
    'PORCELAIN' |
    'MISC' |
    'SPRING_AUTUMN' |
    'WANG_SU' |
    'ONLINE_AUCTION'

@TableItem({
    additionalHeaders:[{text: "",value: 'actions', order: 4}]
})
export class ArticleManagement implements Article{
    id: number;
    published: boolean;
    @Header({text: "标题", order: 0})
    title: string;
    @Header({text: "时间", order: 2})
    time: string;
    @Header({text: "轮播", order: 3})
    headline: boolean
    @Header({text: "类型", order: 1})
    subType?: SubType | Type;

    type: Type;
    constructor(article: Article) {
        if(article.subType != undefined) this.subType = article.subType; else this.subType = article.type
        this.id = article.id
        this.published = article.published
        this.time = article.time
        this.title = article.title
        this.type = article.type
        this.headline = article.headline
    }
}
@TableItem({
    additionalHeaders:[{text: "",value: 'actions', order: 3}]
})
export class ArticleIndividualManagement implements Article{
    id: number;
    published: boolean;
    @Header({text: "标题", order: 0})
    title: string;
    @Header({text: "时间", order: 2})
    time: string;
    headline: boolean
    @Header({text: "类型", order: 1})
    subType?: (SubType | Type);

    type: Type;
    constructor(article: Article) {

        this.id = article.id
        this.published = article.published
        this.time = article.time
        this.title = article.title
        this.type = article.type
        this.headline = article.headline
        if(article.subType != undefined) this.subType = article.subType; else this.subType = article.type
    }
}

@TableItem({
})
export class ArticleView implements Article{
    id: number;
    published: boolean;
    @Header({text: "名称", order: 1})
    title: string;
    @Header({text: "日期", order: 2})
    time: string;
    headline: boolean;
    @Header({text: "艺术品编码", order: 0})
    registry: string | undefined;
    @Header({text: "估值", order: 3})
    value: string | undefined;
    @Header({text: "类型", order: 4})
    wareHouseType: string | undefined
    type: Type;
    constructor(article: Article) {
        this.id = article.id
        this.published = article.published
        this.time = article.time
        this.title = article.title
        this.type = article.type
        this.headline = article.headline
        this.registry = article.registry
        this.value = article.value
        this.wareHouseType = article.wareHouseType
    }
}
