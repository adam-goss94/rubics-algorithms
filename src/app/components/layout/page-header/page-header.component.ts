import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent{
  constructor(public translate: TranslateService){}

  switchLanguage(lang: string){
    this.translate.use(lang);
  }
}
