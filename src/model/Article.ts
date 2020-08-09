import { Header } from '@lu1kaifeng/jpa-data-table/src/decorator/HeaderDecorator';
import { TableItem } from '@lu1kaifeng/jpa-data-table/src/decorator/TableItemDecorator';

export interface Article {
    id: number;
    title: string;
    published: boolean;
    time: string;
    type: Type;
}

export type Type = 'NEWS' |
'ACTIVITY'|
    'POLICY'|
    'ANNOUNCE'|
    'TAX_FREE'|
    'EXHIBITION'|
    'AUCTION'
@TableItem({
    additionalHeaders:[{text: "",value: 'actions', order: 2}]
})
export class ArticleManagement implements Article{
    id: number;
    published: boolean;
    @Header({text: "标题", order: 0})
    title: string;
    @Header({text: "时间", order: 1})
    time: string;

    type: Type;
    constructor(article: Article) {
        this.id = article.id
        this.published = article.published
        this.time = article.time
        this.title = article.title
        this.type = article.type
    }
}

@TableItem({
    additionalHeaders:[{text: "",value: 'actions', order: 2}]
})
export class ArticleView implements Article{
    id: number;
    published: boolean;
    @Header({text: "标题", order: 0})
    title: string;
    @Header({text: "时间", order: 1})
    time: string;

    type: Type;
    constructor(article: Article) {
        this.id = article.id
        this.published = article.published
        this.time = article.time
        this.title = article.title
        this.type = article.type
    }
}
