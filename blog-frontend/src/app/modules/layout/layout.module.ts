import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ScrollfollowDirective } from './directives/scrollfollow.directive';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './elements/header/header.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ScrollfollowDirective,
    SideBarComponent,
    HeaderComponent,
    MainlayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SideBarComponent,
    HeaderComponent,
    MainlayoutComponent
  ]
})
export class LayoutModule { }
