import {SubType, Type} from "@/model/Article";

export const TypeToDisplayMap: {[key in Type | SubType]: string} = {
        'NEWS': '新闻',
    'ACTIVITY': '活动',
    'POLICY': '政策',
    'ANNOUNCE': '声明',
    'TAX_FREE': '免税仓储',
    'EXHIBITION': '展览',
    'AUCTION': '拍卖',
        'PAINTING': '书画',
    'PORCELAIN': '瓷器',
    'MISC': '杂项',
    'SPRING_AUTUMN': '春秋',
    'WANG_SU': '望塑',
    'ONLINE_AUCTION': '网拍',
    'EXHIBITION_INFO': '展讯'
}
