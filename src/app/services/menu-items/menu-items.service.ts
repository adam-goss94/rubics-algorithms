import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn: 'root'
})
export class MenuItemsService {
    private _url: string = 'assets/data/data.json';

    constructor(private http: HttpClient) {}

    getData(){
        return this.http.get(this._url)
    }
}