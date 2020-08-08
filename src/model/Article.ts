export interface Article {
    id: number,
    title: string,
    published: boolean,
    time: string,
    type: Type
}

export type Type = 'ANTIQUE' | 'NEWS'
