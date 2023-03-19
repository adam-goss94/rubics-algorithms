import { MenuItemsService } from './../../../services/menu-items/menu-items.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environments';
@Component({
    selector: 'app-page-three',
    templateUrl: './page-three.component.html',
    styleUrls: ['./page-three.component.scss'],
})
export class PageThreeComponent implements OnInit {
    public dataRecived = false;
    public menuItems: any;
    public url = environment.threeData;
    constructor(private _MenuItemsService: MenuItemsService) {}

    ngOnInit(): void {
        this.menuItems = this._MenuItemsService
            .getData(this.url)
            .subscribe((data) => (this.menuItems = data));
        setTimeout(() => {
            this.dataRecived = true;
        }, 300);
    }
}
