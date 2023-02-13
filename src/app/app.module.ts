import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageHeaderComponent } from './components/layout/page-header/page-header.component';
import { NavigationComponent } from './components/common/navigation/navigation.component';
import { ButtonComponent } from './components/common/button/button.component';
import { PanelComponent } from './components/common/panel/panel.component';
import { PageFooterComponent } from './components/layout/page-footer/page-footer.component';
import { PageThreeComponent } from './components/layout/page-three/page-three.component';
import { PageFourComponent } from './components/layout/page-four/page-four.component';
import { PageMegamixComponent } from './components/layout/page-megamix/page-megamix.component';
import { PageHomeComponent } from './components/layout/page-home/page-home.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DividerComponent } from './components/common/divider/divider.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    NavigationComponent,
    ButtonComponent,
    PanelComponent,
    PageFooterComponent,
    PageThreeComponent,
    PageFourComponent,
    PageMegamixComponent,
    PageHomeComponent,
    DividerComponent
  ],
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      extend: true,
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
