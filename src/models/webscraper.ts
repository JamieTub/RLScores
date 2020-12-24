import { Observable } from "rxjs";
import axios from "axios";

export class WebScraper {

    data: string;
    

    constructor(){
        this.data = ''
    }

    getPage(url: string) : Promise<any> {
        const AxiosInstance = axios.create()

        return AxiosInstance.get(url);
    }
}