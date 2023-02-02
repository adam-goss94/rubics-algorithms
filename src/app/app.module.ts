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
    PageHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
