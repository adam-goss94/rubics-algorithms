import { Pages } from './../../types/pages.interface';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn: 'root'
})
export class MenuItemsService {
    constructor(private http: HttpClient) {}

    getData(url: string): Observable<Pages>{
        return this.http.get<Pages>(url)
    }
}
