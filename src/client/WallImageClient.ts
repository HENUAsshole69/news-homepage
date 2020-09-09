import AxiosInstance from "@/client/AxiosInstance";
import {WallImage} from "@/model/WallImage";

export class WallImageClient {
    static postImage( picB64: string){
        return AxiosInstance.post('/wallImage',picB64,{
            headers: { 'Content-Type': 'application/octet-stream' }
        })
    }

    static async getImage(id: number): Promise<string>{
        return AxiosInstance.get('/wallImage/'+id,{ responseType: 'arraybuffer' }).then((response) => {
            const image = btoa(
                new Uint8Array(response.data)
                    .reduce((data, byte) => data + String.fromCharCode(byte), '')
            );
            return image;
        });
    }
    static async getImageDtoList(): Promise<WallImage[]>{
        return (await AxiosInstance.get('/wallImage/list',{  })).data as WallImage[]
    }
    static async delImage(id: number){
        return (await AxiosInstance.delete('/wallImage/'+id))
    }
}
