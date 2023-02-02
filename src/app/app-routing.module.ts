import { PageMegamixComponent } from './components/layout/page-megamix/page-megamix.component';
import { PageFourComponent } from './components/layout/page-four/page-four.component';
import { PageThreeComponent } from './components/layout/page-three/page-three.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '3x3', component: PageThreeComponent },
  { path: '4x4', component: PageFourComponent },
  { path: 'megamix', component: PageMegamixComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
